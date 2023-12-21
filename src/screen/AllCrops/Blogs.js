import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { db } from '../../../firebase/firebase.config';
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
import { ScrollView } from 'react-native-gesture-handler';

const Blogs = () => {
  const [data, setData] = useState([]);
  useLayoutEffect(() => {
    const ref = collection(db, "blogs");
    onSnapshot(ref, (categories) =>
      setData(
        categories.docs.map((category) => ({
          id: category.id,
          data: category.data(),
        }))
      )
    );
  }, [])
  return (
    <View>
       <Text
      style={{
        fontSize:30,
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
        backgroundColor:'green',
        marginTop:20,
      }}>Blogs </Text>

<ScrollView>
{data.map((item, key) => (
          <View style ={{
           margin:10,
           backgroundColor:'#fff',
           justifyContent:'center',
           width:160,
           borderRadius:10,
          }}>
            <Image 
              source={{
                uri:item.data.picture
              }}
              style={{
                height:150,
                width:150,
                borderRadius:10,
                marginLeft:10,
                backgroundColor:'#fff',
              }}
            />
            


            <Text>
              {item.data.Blogs}
            </Text>
          </View>
         ))}
     
</ScrollView>


{/* {data.map((item, key) => (
          <View style ={{
           margin:10,
           backgroundColor:'#fff',
           justifyContent:'center',
           width:160,
           borderRadius:10,
          }}>
            <Image 
              source={{
                uri:item.data.picture
              }}
              style={{
                height:150,
                width:150,
                borderRadius:10,
                marginLeft:10,
                backgroundColor:'#fff',
              }}
            />
            


            <Text>
              {item.data.Blogs}
            </Text>
          </View>
         ))}
      */}
      

    </View>
  )
}

export default Blogs

const styles = StyleSheet.create({})