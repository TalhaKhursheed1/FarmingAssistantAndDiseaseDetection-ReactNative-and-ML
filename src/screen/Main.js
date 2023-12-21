import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";


const Main = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        style={{
          height: 700,
          width: 800,
        }}
        source={{
          url: "https://img.freepik.com/premium-photo/green-plant-leaves-nature-spring-season-green-background_73485-4828.jpg?w=2000",
        }}

      >

        <Text style={{
          color: 'white',
          fontSize: 25,
          margin: 30,
          padding: 10,
          fontWeight: "bold",
          backgroundColor: 'purple'
        }}
        >
          Farming Assistant and

        </Text>
        <Text style={{
          color: 'white',
          fontSize: 25,
          margin: 30,
          fontWeight: "bold",
          bottom: 45,
          padding: 10,
          backgroundColor: 'purple'
        }}
        >

          Disease Detection

        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Users")}
          style={{
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: 'grey',
            width: 350,
            height: 50,
            marginLeft: 20,


          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: "bold",
              marginHorizontal: 120,
              padding: 10,


            }}
          >
            Login
          </Text>

        </TouchableOpacity>

        <Text style={{
          color: 'white',
          fontSize: 30,
          //   fontWeight: "bold",
          marginHorizontal: 35,
          padding: 50,

        }}>
          ______ or ______
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}
          style={{
            borderRadius: 15,
            marginTop: 20,
            backgroundColor: 'green',
            width: 360,
            height: 50,
            marginLeft: 10,
            marginHorizontal: 50,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 30,
              fontWeight: "bold",
              marginHorizontal: 85,
              padding: 10,


            }}
          >
            Register Here
          </Text>

        </TouchableOpacity>



      </ImageBackground>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({});
