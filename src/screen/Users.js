import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

const Users = ({ navigation }) => {
  const [type, setType] = useState(null);


  return (
    <ImageBackground
      style={{
        height: 700,
        width: 800,
      }}
      source={{
        url: "https://img.freepik.com/premium-photo/green-plant-leaves-nature-spring-season-green-background_73485-4828.jpg?w=2000",
      }}
    >
      <View>

        <Image
          style={{
            height: 180,
            width: 150,
            marginLeft: 100,

          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png",
          }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 25,
            margin: 25,
            width: 200,
            padding: 20,
            fontWeight: "bold",
            backgroundColor: 'blue',
            alignItems: 'center',
            textAlign: 'center',
            marginLeft: 80,


          }}
        >
          LOGIN AS:
        </Text>
        <TouchableOpacity
          style={{
            borderRadius: 30,
            // marginTop:50,
            backgroundColor: "skyblue",
            width: 300,
            height: 55,
            marginLeft: 40,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              marginHorizontal: 40,
              padding: 15,
              marginLeft: 40,
            }} onPress={() =>
              navigation.navigate("LoginPage", {
                type: "admin",
              })
            }
          >
            Admin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 30,
            marginTop: 30,
            backgroundColor: "skyblue",
            width: 300,
            height: 55,
            marginLeft: 40,
            alignItems: "center",
          }}
        >
          <Text style={{
            color: "black",
            fontSize: 25,
            fontWeight: "bold",
            marginHorizontal: 40,
            padding: 15,
            marginLeft: 40,

          }}
            onPress={() =>
              navigation.navigate("LoginPage", {
                type: "customer",
              })
            }
          >
            Users
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderRadius: 30,
            marginTop: 30,
            backgroundColor: "skyblue",
            width: 300,
            height: 55,
            marginLeft: 40,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              marginHorizontal: 40,
              bottom: 5,

            }}
            onPress={() =>
              navigation.navigate("LoginPage", {
                type: "supplier",
              })
            }
          >
            Supplier /سپلائر
          </Text>
        </TouchableOpacity>


        {/* <TouchableOpacity
        style={{
          borderRadius: 30,
          marginTop: 50,
          backgroundColor: "grey",
          width: 310,
          height: 55,
          marginLeft: 40,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontWeight: "bold",
            marginHorizontal: 30,
          }}
          onPress={() =>
            navigation.navigate("LoginPage", {
              supplier: supplier,
            })
          }
        >
          Supplier /سپلائر
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 30,
          marginTop: 40,
          backgroundColor: "grey",
          width: 310,
          height: 55,
          marginLeft: 40,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "black",
            fontSize: 25,
            fontWeight: "bold",
            marginHorizontal: 30,
            
          }}
          onPress={() =>
            navigation.navigate("LoginPage", {
              admin: admin,
            })
          }
        >
          Admin /ایڈمن
        </Text>
      </TouchableOpacity> */}
        {/* <View> */}
        {/* <Text style={{
                color:'black',
              fontSize: 30,
            //   fontWeight: "bold",
              marginHorizontal:10,
              padding: 10,
              textAlign:'center',
              
            }}>
                ______ or ______
            </Text> */}

        {/* <TouchableOpacity onPress={()=> navigation.navigate('Register') 
            }
            style={{
           borderRadius:15,  
            marginTop:10,
            backgroundColor:'green',
            width: 330,
            height:50,
            marginLeft:30,
      }}>
          <Text
            style={{
                color:'white',
              fontSize: 30,
              fontWeight: "bold",
              marginHorizontal:95,
              padding: 10,
              textAlign:'center',
              
              
            }}
          >
            REGISTER
          </Text>

        </TouchableOpacity> */}

        {/* </View> */}
      </View>
    </ImageBackground>
  );
};

export default Users;

const styles = StyleSheet.create({});
