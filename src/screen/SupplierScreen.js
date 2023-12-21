import React,{useLayoutEffect,useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import Categories from "./Component/Categories";
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

import { db,auth } from "../../firebase/firebase.config";

import Topbar from "./Component/Topbar";
import Bottom from "./Component/Bottom";



export default function SupplierScreen(navigation) {
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
    <View style={styles.container}>
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
            backgroundColor: "green",
            fontWeight: "bold",
          }}
        >
          Welcome Supplier /سپلائر
        </Text> 
      </View>
  
          <Topbar/>
          
          
          <View>
            <Image style={{
              height:100,
            }}
                  source={{
                    uri:"https://i2.wp.com/bioplasticsnews.com/wp-content/uploads/2020/07/sustainable-intensive-farming.jpeg?resize=1696%2C1048&ssl=1",

                  }}
            />
          </View>
          {/* <ScrollView  showsVerticalScrollIndicator={false}
           style={{
          width:500,
          marginTop:10,
        }}
          
          
          >
        <View>
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
            <Text style ={{
              fontStyle:'italic',
              fontSize:25,
             
             
              width:310,
            }}>
              {item.data.AddItems}
            </Text>
            <Text style ={{
              fontStyle:'italic',
              fontSize:25,
               
            }}>
              {item.data.Quantity}
            </Text>
            <Text style={{
              fontStyle:'italic',
              fontSize:25,
            }}>
              {item.data.ContactNo}
            </Text>
          </View>
         ))}
        </View>
        
        </ScrollView> */}
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
          {/* {data.map((item, key) => (
          <View>
            <Image 
              source={{
                uri:item.data.picture
              }}
              style={{
                height:200,
                width:200,
              }}
            />
          </View>
         ))} */}
         
          <Bottom/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "absolute",
    alignItems: "center",
    backgroundColor: "#eee",
    padding: 15,
    bottom: 0,
    width: "100%",
    height: 60,
  },
  bottomTab: {
    padding: 10,
  },
  bottomTabImg: {
    width: 28,
    height: 28,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
