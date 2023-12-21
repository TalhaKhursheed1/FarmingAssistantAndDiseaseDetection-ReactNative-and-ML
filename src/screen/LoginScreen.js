import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  onChangeText,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase.config";
import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
// import { doc, getDoc } from "firebase/firestore";
const LoginScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState(null);
  const [type, setType] = useState(route.params.type);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);


  // alert('customer');
  const uploadAdmin = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "Users"), {

      email: email,
      name: name,
    }).then(() => {
      alert("Admin Uploaded Successfully");
    });
  };
  
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // alert('User Login successfully');

        // navigation.replace("AdminScreen");

        if (type == "admin") {
          navigation.replace("AdminScreen");
        }
        if (type == "customer") {
          navigation.replace("Home");
        }
        if (type == "supplier") {
          navigation.replace("SupplierScreen");
        }
        alert('Check your Email!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        alert('Password must be 6 digit')
      });
  };

  const resetPassword = () => {
    if (email != null) {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Password reset email sent successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    } else {
      alert("Enter a valid Email");
    }
  };

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
        {/* <View
          style={{
            alignItems: "center",
          }}
        ></View> */}
        <View>
          <Image
            source={{
              url: "https://cdn-icons-png.flaticon.com/512/5087/5087579.png",
            }}
            style={{
              height: 50,
              width: 60,
              margin: 10,
              padding: 50,
              marginLeft: 140,
            }}
          />
          <Text
            style={{
              fontSize: 40,
              fontWeight: "normal",
              margin: 25,
              width: 330,
              textAlign: "center",
              backgroundColor: "purple",
              color: "white",
              marginRight: 450,
              bottom: 20,
            }}
          >
            LOGIN
          </Text>
        </View>
        {/* <TextInput
          style={{
            backgroundColor: "white",
            fontWeight: "bold",
            borderWidth: 0.5,
            margin: 5,
          }}
          // label="Name"
          // onChangeText={(Text) => setName(Text)}
        /> */}

        <TextInput
          style={{
            backgroundColor: "white",
            fontWeight: "bold",
            borderWidth: 0.5,
            margin: 5,
            bottom: 20,
            marginLeft: 10,
            width: 360,
            borderRadius: 50,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,

            padding: 5,
            height: 50,
            color: 'white',
          }}
          placeholder="Email"
          underlineColor='transparent'

          onChangeText={(Text) => setEmail(Text)}
        />

        <TextInput
          style={{
            backgroundColor: "white",
            fontWeight: "bold",
            borderWidth: 0.5,
            margin: 5,
            bottom: 20,
            marginLeft: 10,
            width: 360,
            borderRadius: 50,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,

            padding: 5,
            height: 50,
            color: 'white',
          }}
          label="Password"
          underlineColor='transparent'
          secureTextEntry={true}
          onChangeText={(Text) => setPassword(Text)}
        />
        <TouchableOpacity
          style={{
            bottom: 40,
          }}
          onPress={() => resetPassword()}
        >
          <Text
            style={{
              textAlign: "center",
              color: "black",
              padding: 10,
              margin: 50,
              backgroundColor: "grey",
              height: 40,
              width: 150,
              marginLeft: "29%",
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Home")}> */}

        {/* </TouchableOpacity> */}

        <TouchableOpacity
          style={{
            alignItems: "center",
            padding: 10,
            margin: 110,
            borderRadius: 20,
            marginTop: 0,
            backgroundColor: "skyblue",
            width: 150,
            height: 50,
            bottom: 50,
          }}
          onPress={() => login()}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              padding: 5,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
          <View></View>
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 20,
            bottom: 150,
            padding: 10,
            margin: 5,
            marginLeft: 75,
          }}
        >
          _________Or_________
        </Text>
        <View>
          <TouchableOpacity
            style={{
              bottom: 150,
              height: 1,
              marginLeft: 80,
              borderRadius: 30,
              padding: 15,
            }}
            onPress={() =>
              navigation.navigate("Register", {
                type: type,
              })
            }
          >
            <Text
              style={{
                fontSize: 25,
                backgroundColor: "green",
                height: 45,
                color: "white",
                width: 200,

                padding: 5,
                alignItems: "center",
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
