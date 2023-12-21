import { StyleSheet, Text, View, TouchableOpacity,Image } from "react-native";
import React, { useState, useLayoutEffect } from "react";
import { TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import { auth, db, storage } from "../../firebase/firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection,setDoc,doc } from "firebase/firestore";
import { async } from "@firebase/util";
 


const Crops = (navigation) => {

     const [addItems, setAddItems] = useState(null);
     const [quantity, setQuantity] = useState(null);
     const [contactNo, setContactNo] = useState(null);
     const [price, setPrice] = useState(null);
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
    if (!quantity || !/^\d+$/.test(quantity) || !contactNo || !/^\d+$/.test(contactNo) || !price || !/^\d+$/.test(price)) {
      alert('Please enter valid values for Quantity, Contact Number, and Price (digits only)');
      return;
    }
    if (!price) {
      alert('Please enter the Price');
      return;
    }
    if (!/^\d+$/.test(price)) {
      alert('Please enter a valid Price (digits only)');
      return;
    }
    if (!contactNo) {
      alert('Please enter the Contact Number');
      return;
    }
    if (!/^\d+$/.test(contactNo)) {
      alert('Please enter a valid Contact Number (digits only)');
      return;
    }
    if (!quantity) {
      alert('Please enter the Quantity');
      return;
    }
    if (!/^\d+$/.test(quantity)) {
      alert('Please enter a valid Quantity (digits only)');
      return;
    }
   
   

        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "categories"), {
          picture: showPic,
          AddItems: addItems,
          Quantity: quantity,  
          ContactNo: contactNo,
          Price: price,

          
        })
        .then(()=>{
          alert("Uploaded Successfully");
  
        })
        navigation.navigate("Home");
      
    };
  return (
    <View>
    <View>
            <Image style={{
              height:100,
            }}
                  source={{
                    uri:"https://i2.wp.com/bioplasticsnews.com/wp-content/uploads/2020/07/sustainable-intensive-farming.jpeg?resize=1696%2C1048&ssl=1",

                  }}

                  />
          </View>

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
          padding: 10,
          textAlign: "Left",
          fontWeight: "bold",
        }}
      >
        Add Your Details
      </Text>
      <View>
        <TextInput
          label="Item Name"
          underlineColor='transparent'
          onChangeText={(text) => setAddItems(text)}
          style={{
            margin: 5,
            marginVertical: 5,
            width:370,
        borderRadius:50,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        padding:5,
        height:50,
          }}
        />
        <TextInput
          label="Quantity"
          underlineColor='transparent'
         
          onChangeText={(text) => setQuantity(text)}
          style={{
            margin: 5,
            marginVertical: 5,
            
        width:370,
        borderRadius:50,
        borderTopStartRadius:50,
        borderTopEndRadius:50,
        
        padding:5,
        height:50,
          }}
        />
         <TextInput
          label="Contact No"
          underlineColor='transparent'
          onChangeText={(text) => setContactNo(text)}
          style={{
            margin: 5,
            marginVertical: 5,
            width:370,
            borderRadius:50,
            borderTopStartRadius:50,
            borderTopEndRadius:50,
        
        padding:5,
        height:50,
          }}
        />
         <TextInput
          label="Enter Your Price"
          underlineColor='transparent'
          onChangeText={(text) => setPrice(text)}
          style={{
            margin: 5,
            marginVertical: 5,
            width:370,
            borderRadius:50,
            borderTopStartRadius:50,
            borderTopEndRadius:50,
        
        padding:5,
        height:50,
          }}
        />

      </View>
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
          Choose a Picture
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
          Post Data
        </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
          style={{
            borderRadius:25,
            backgroundColor: "green",
            color: "white",
            height: 40,
            width: 150,
            padding: 10,
            margin: 20,
            alignItems:'center',
            marginLeft: 110,
            marginRight: 50,
            marginTop:10,
          }}
          // onPress={() => saveData()}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Post 
          </Text>
          
        </TouchableOpacity> */}
       
    </View>
  )
}

export default Crops

const styles = StyleSheet.create({})