import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { auth, db, storage } from "../../firebase/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection,setDoc,doc } from "firebase/firestore";
import { async } from "@firebase/util";


const Postblogs = () => {
    const [blogs, setBlogs] = useState(null);
    const [contactNo, setContactNo] = useState(null);
    const [imgUrl, setImgUrl] = useState(null);
    const [dbImage, setDbImage] = useState(null);
    const [showPic, setShowPic] = useState(null);

 useLayoutEffect(() => {
   const uploadImage = async () => {
     // 1- set metadata
     const metadata = {
       contentType: "image/jpeg",
     };

     // convert image into blob
     const blob = await new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest();
       xhr.onload = function () {
         resolve(xhr.response);
       };
       xhr.onerror = function () {
         reject(new TypeError("Network request failed"));
       };
       xhr.responseType = "blob";
       xhr.open("GET", imgUrl, true);
       xhr.send(null);
     });

     // upload img on storage

     const storageRef = ref(storage, "blogs/" + Date.now());

     const uploadTask = uploadBytesResumable(storageRef, blob, metadata);
     uploadTask.on(
       "state_changed",
       (snapshot) => {
         // Observe state change events such as progress, pause, and resume
         // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
         const progress =
           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         console.log("Upload is " + progress + "% done");
         switch (snapshot.state) {
           case "paused":
             console.log("Upload is paused");
             break;
           case "running":
             console.log("Upload is running");
             break;
         }
       },
       (error) => {
         // Handle unsuccessful uploads
       },
       () => {
         // Handle successful uploads on complete
         // For instance, get the download URL: https://firebasestorage.googleapis.com/...
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           console.log("File available at", downloadURL);
           setDbImage(downloadURL);
           setShowPic(downloadURL);
           setImgUrl(null);
         });
       }
     );
   };
   if (imgUrl != null) {
     uploadImage();
     setImgUrl(null);
   }
 }, [imgUrl, dbImage]);

 const PickImg = async () => {
   {
     // No permissions request is necessary for launching the image library
     let result = await ImagePicker.launchImageLibraryAsync({
       mediaTypes: ImagePicker.MediaTypeOptions.All,
       allowsEditing: true,
       aspect: [4, 3],
       quality: 1,
     });

     console.log(result);

     if (!result.cancelled) {
       setImgUrl(result.uri);
     }
   }
 };
 const uploadCategory = async () => {
  
       // Add a new document with a generated id.
       const docRef = await addDoc(collection(db, "blogs"), {
         picture: showPic,
         Blogs: blogs,

         
       })
       .then(()=>{
         alert(" Uploaded Successfully");
 
       })
       navigation.navigate("AdminScreen");
     
   };
  return (
    <View>


    <Text style={{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        backgroundColor:'blue',
        color:'white',
        marginTop:20,
    }}>
        Blogs Section
    </Text>




        <TextInput
          placeholder="Description"
          underlineColor='transparent'
         
          onChangeText={(text) => setBlogs(text)}
          style={{
            margin: 5,
            marginVertical: 5,
            marginTop:50,
            
        width:370,
        borderRadius:50,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        
        padding:5,
        height:50,
          }}
        />
         <TouchableOpacity
        style={{
          backgroundColor: "green",
          color: "white",
          height: 40,
          width: 250,
          padding: 10,
          margin: 20,
          marginLeft: 70,
          marginRight: 50,
          borderRadius: 10,
        }}
        onPress={() => PickImg()}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          Select file
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          color: "white",
          height: 40,
          width: 250,
          padding: 10,
          margin: 10,
          marginLeft: 70,
          marginRight: 50,
          borderRadius: 20,
        }}
        onPress={() => uploadCategory()}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: "white",
          }}
        >
          Post Blog
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Postblogs

const styles = StyleSheet.create({})