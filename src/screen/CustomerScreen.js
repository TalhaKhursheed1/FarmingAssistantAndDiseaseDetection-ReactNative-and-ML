import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { auth, db, storage } from "../../firebase/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";


export default function CustomerScreen (navigation) {
  //   const [title, setTitle] = useState(null);
  //   const [picture, setPicture] = useState(null);
  // const [image, setImage] = useState(null);
 
  const [title, setTitle] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);
  const [dbImage, setDbImage] = useState(null);
  const [showPic, setShowPic] = useState(null);
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  //   useEffect(() => {
  //     const uploadImage = async () => {
  //       const blobImage = await new promise((resolve, reject) => {
  //         const xhr = new XMLHttpRequest();
  //         xhr.onload = function () {
  //           resolve(xhr,response);
  //         };
  //         xhr.onerror = function () {
  //           reject(new TypeError("Network request failed"));
  //         };
  //         xhr.responseType = "blob";
  //         xhr.open("GET", image, true);
  //         xhr.send(null);
  //       });

  //       // Create the file metadata
  //       /** @type {any} */
  //       const metadata = {
  //         contentType: "image/jpeg",
  //       };
  //       // Upload file and metadata to the object 'images/mountains.jpg'
  // const storageRef = ref(storage, 'categories/' + Data.now);
  // const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

  // // Listen for state changes, errors, and completion of the upload.
  // uploadTask.on('state_changed',
  //   (snapshot) => {
  //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     console.log('Upload is ' + progress + '% done');
  //     switch (snapshot.state) {
  //       case 'paused':
  //         console.log('Upload is paused');
  //         break;
  //       case 'running':
  //         console.log('Upload is running');
  //         break;
  //     }
  //   },
  //   (error) => {
  //     // A full list of error codes is available at
  //     // https://firebase.google.com/docs/storage/web/handle-errors
  //     switch (error.code) {
  //       case 'storage/unauthorized':
  //         // User doesn't have permission to access the object
  //         break;
  //       case 'storage/canceled':
  //         // User canceled the upload
  //         break;

  //       // ...

  //       case 'storage/unknown':
  //         // Unknown error occurred, inspect error.serverResponse
  //         break;
  //     }
  //   },
  //   () => {
  //     // Upload completed successfully, now we can get the download URL
  //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //       console.log('File available at', downloadURL);
  //     });
  //   }
  // );

  // }

  //     if (image != null) {
  //       uploadImage();
  //       setImage(null);
  //     }
  //   }, [image]);

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

      const storageRef = ref(storage, "categories/" + Date.now());

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
            // setDbImage(downloadURL);
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
      const docRef = await addDoc(collection(db, "categories"), {
        picture: showPic,
        
      })
      // .then(()=>{
      //   alert("Category Uploaded Successfully");

      // })
      navigation.navigate("FarmerScreen");
    
  };

    return (
            
        <View style={styles.container}>
        <View>
                <Text style={{
                    padding:15,
                    backgroundColor:'purple',
                    fontSize:25,
                    fontWeight:'bold',
                }}>
                    Farming Assiatnt disease Detection
                </Text>
                <Text style={{
                    fontSize:25,
                }}>
                    Welcome Here
                </Text>
        </View>
        <View style={styles.header}>
          <TouchableOpacity style={styles.button}>
            <Text >Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Categories</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact us</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
        <View>
          
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              color: "white",
              height: 50,
              width: 260,
              padding: 10,
              margin: 20,
              marginLeft: 50,
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
              Choose a Picture
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "grey",
              color: "white",
              height: 50,
              width: 200,
              padding: 10,
              margin: 20,
              marginLeft: 60,
              marginRight: 50,
              borderRadius: 10,
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
              Upload Category
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
      
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#eee',
        padding: 20,
       
      },
      button: {
        padding: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: 'bold',
      },
      content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });