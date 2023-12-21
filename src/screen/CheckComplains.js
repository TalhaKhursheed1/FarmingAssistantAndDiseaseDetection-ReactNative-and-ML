import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { auth, db } from "../../firebase/firebase.config";
import { collection, query, onSnapshot, deleteDoc, doc, addDoc, getDoc } from "firebase/firestore";
const AdminComplaints = () => {
  const [complaints, setComplaints] = useState([]);

 useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Complains"), (snapshot) => {
      const updatedComplaints = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setComplaints(updatedComplaints);
    });

    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Complains", id));
      alert("Complaint deleted successfully!");
    } catch (error) {
      console.log("Error deleting complaint: ", error);
      alert("An error occurred while deleting the complaint.");
    }
  };

  const handleAccept = async (id) => {
    try {
      const userDocRef = doc(db, "Users", id);
      const userDocSnap = await getDoc(userDocRef);
  
      if (userDocSnap.exists()) {
        const userName = userDocSnap.data().FullName;
  
        await addDoc(collection(db, "AdminNotifications"), {
          userId: id,
          userName: userName,
          message: "Your complaint has been accepted. Work is in progress.",
        });
  
        Alert.alert("Complaint Accepted", "The user has been notified.");
      } else {
        Alert.alert( "The user associated with this complaint does not exist.");
      }
    } catch (error) {
      console.log("Error accepting complaint: ", error);
      alert("An error occurred while accepting the complaint.");
    }
  };
  
  const renderItem = ({ item }) => (
    <View style={styles.complaintItem}>
      <Text style={styles.complaintText}>User Name: {item.data.Name}</Text>
      <Text style={styles.complaintText}>Complaint: {item.data.Complains}</Text>
      <TouchableOpacity
        style={styles.acceptButton}
        onPress={() => handleAccept(item.id)}
      >
      <Text style={styles.acceptButtonText}>Accept & Notify User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => handleDelete(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Complaints</Text>
      <FlatList
        data={complaints}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};


export default AdminComplaints;

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
  complaintItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  complaintText: {
    fontSize: 16,
    marginBottom: 5,
  },
  acceptButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
  acceptButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
