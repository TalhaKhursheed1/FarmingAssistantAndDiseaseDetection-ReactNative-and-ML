import { StyleSheet, Text, View,Image } from 'react-native'
import { auth, db, storage } from "../../firebase/firebase.config";
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
import React, { useState, useLayoutEffect } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const MyAdds = () => {
  useLayoutEffect(() => {
    const ref = collection(db, "categories");
    onSnapshot(ref, (categories) =>
      setData(
        categories.docs.map((category) => ({
          id: category.id,
          data: category.data(),
        }))
      )
    );
  }, [])
  const [data, setData] = useState([]);

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
    <Text style ={{
      textAlign:'center',
      fontSize:30,
      fontWeight:'bold',
      backgroundColor:'skyblue',
      margin:20,
    }}>
      My Adds
    </Text>
    <Text>_____________________________________________________</Text>
      

      <ScrollView showsVerticalScrollIndicator={false}
        
        
        style={{
          width:400,
          marginTop:10,
        }}
        
        >
         <View>
      {data.map((item, key) => (
          <View style ={{
           margin:10,
           backgroundColor:'#fff',
           justifyContent:'center',
           width:260,
           borderRadius:10,
          }}
          >
            <Image 
              source={{
                uri:item.data.picture
              }}
              style={{
                height:250,
                width:250,
                borderRadius:10,
                marginLeft:10,
                
              }}
            />
            <Text style={{
              fontStyle:'italic',
              fontSize:25,
              marginLeft: 20,
            }}>
            Item:
              {item.data.AddItems}
            </Text>
            <Text style={{
              fontStyle:'italic',
              fontSize:25,
              marginLeft: 20,
            }}>
              Quantity:
              {item.data.Quantity}
            </Text>
            <Text style={{
              fontStyle:'italic',
              fontSize:35,
              marginLeft: 20,
            }}>
              Price:
              {item.data.Price}
            </Text>
            <Text style={{
              fontStyle:'italic',
              fontSize:25,
              marginLeft: 20,
            }}>
              Ph No:
              {item.data.ContactNo}
            </Text>
          </View>
         ))}
      </View>
        
        </ScrollView>

     
    </View>
  )
}

export default MyAdds

const styles = StyleSheet.create({})