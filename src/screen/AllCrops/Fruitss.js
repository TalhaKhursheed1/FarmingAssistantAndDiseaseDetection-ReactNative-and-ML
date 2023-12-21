import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { db, auth } from '../../../firebase/firebase.config';
import { collection, query, onSnapshot, deleteDoc, where, getDocs, doc, deleteField } from "firebase/firestore";


const UserNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "AdminNotifications"), where("userId", "==", auth.currentUser.uid)),
      (snapshot) => {
        const updatedNotifications = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNotifications(updatedNotifications);
      }
    );

    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleDeleteNotification = async (notificationId) => {
    try {
      // Delete the selected notification
      await deleteDoc(doc(db, "AdminNotifications", notificationId));
      console.log("Notification deleted successfully!");
    } catch (error) {
      console.log("Error deleting notification:", error);
    }
  };

  const handleClearNotifications = async () => {
    try {
      // Clear all notifications for the current user
      const userNotificationsRef = collection(db, "AdminNotifications");
      const querySnapshot = await getDocs(query(userNotificationsRef, where("userId", "==", auth.currentUser.uid)));

      const batch = db.batch();
      querySnapshot.forEach((doc) => {
        batch.delete(doc.ref);
      });
      await batch.commit();
      Alert.alert("Notifications Cleared", "All notifications have been cleared successfully!");
    } catch (error) {
      console.log("Error clearing notifications:", error);
      Alert.alert("Error", "An error occurred while clearing the notifications.");
    }
  };

  

  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item.message}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDeleteNotification(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Notifications</Text>
      {notifications.length > 0 ? (
        <>
          <FlatList
            data={notifications}
            renderItem={renderNotificationItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContainer}
          />
          {/* <TouchableOpacity
            style={styles.clearButton}
            onPress={handleClearNotifications}
          >
            <Text style={styles.clearButtonText}>Clear Notifications</Text>
          </TouchableOpacity> */}
        </>
      ) : (
        <Text>No notifications available</Text>
      )}
    </View>
  );
};

export default UserNotifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    flexGrow: 1,
  },
  notificationItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    marginBottom: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  clearButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  clearButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
