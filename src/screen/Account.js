import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { db, auth } from "../../firebase/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  collection,
  query,
  onSnapshot,
  docs,
  where,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import { useLayoutEffect, useState } from "react";
import { TextInput } from "react-native-paper";
const Account = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState([]);
  const [type, setType] = useState([]);
  const [email, setEmail] = useState([]);
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    const readData = async () => {
      const docRef = doc(db, "Users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setType(docSnap.data().type);
        setFullName(docSnap.data().FullName);
        setEmail(docSnap.data().Email);
      }
    };
    readData();
  }, []);

  // useLayoutEffect(() => {
  //     const ref = collection(db, "categories");
  //     onSnapshot(ref, (categories) =>
  //       setData(
  //         categories.docs.map((category) => ({
  //           id: category.id,
  //           data: category.data(),
  //         }))
  //       )
  //     );
  //   }, [])


  const Logout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Users");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <View>
      <Text
        style={{
          padding: 15,
          color: "white",
          backgroundColor: "purple",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Farming Asistant & disease Detection
      </Text>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        Profile/پروفائل
      </Text>

      <Text>_____________________________________________________</Text>
      <Text style={{
        fontSize: 20,
        fontWeight: '900',
      }}>
        Name:
      </Text>

      <Text style={{
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: 'lightgreen',
        fontWeight: 'bold',
        height: 50,
        padding: 10,
      }}>{fullName}</Text>
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 90,
      }}>{email}</Text>


      <Text>_____________________________________________________</Text>



      <ScrollView>
        {data.map((item, key) => (
          <View>
            <Image
              source={{
                uri: item.data.picture
              }}
              style={{
                height: 150,
                width: 150,
              }}
            />
            <Text>
              {item.data.AddItems}
            </Text>
            <Text>
              {item.data.Quantity}
            </Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={{
          marginTop: 40,
          borderRadius: 20,
          backgroundColor: "black",
          width: 150,
          height: 45,
          marginLeft: 40,
          alignItems: "center",
          marginLeft: 20,
        }}
        onPress={() => navigation.navigate("Complain")}
      >
        <Text
          style={{
            color: "white",
            width: 150,
            fontSize: 20,
            padding: 20,
            textAlign: "center",
            bottom: 9,
          }}
        >
          Complain
        </Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          style={{
            marginTop: 30,
            borderRadius: 20,
            backgroundColor: "black",
            width: 150,
            height: 45,
            marginLeft: 40,
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              color: "white",
              width: 150,
              fontSize: 20,
              padding: 20,
              textAlign: "center",
              bottom: 9,
            }}
          >
            About us
          </Text>
        </TouchableOpacity>
      </View>

      <View>


        <TouchableOpacity
          style={{
            marginTop: 30,
            borderRadius: 20,
            backgroundColor: "blue",
            width: 250,
            height: 45,

            alignItems: "center",
            marginLeft: 80,
          }}
          onPress={() => Logout()}
        >
          <Text
            style={{
              color: "white",
              width: 150,
              fontSize: 20,
              padding: 20,
              textAlign: "center",
              bottom: 9,
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
