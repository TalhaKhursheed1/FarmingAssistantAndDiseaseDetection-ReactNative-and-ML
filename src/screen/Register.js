import { StyleSheet, Text, View, Image, onChangeText, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase/firebase.config";
import { setDoc, doc } from "firebase/firestore";

const Register = ({ navigation, route }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [retypepassword, setRetypePassword] = useState(null);
  const [fullName, setFullName] = useState(null)
  const [type, setType] = useState(route.params.type);
  // const login = () => {
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {

  //         if (type == "customer") {
  //           navigation.replace("Home");
  //         }
  //         if (type == "supplier") {
  //           navigation.replace("SupplierScreen");
  //         }


  //       })

  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         alert(errorMessage);
  //       });
  //   };

  //    const saveData = async () => {
  //     createUserWithEmailAndPassword( email, password)
  //     await setDoc(doc(db, "Users", auth.currentUser.uid), {
  //      FullName: fullName,
  //      Email: email,
  //     //  Password: password, 
  //      type: type,


  //    })
  //    .then((userCredential) => {
  //     if (type == "admin") {
  //       navigation.replace("AdminScreen");
  //     } 

  //     if (type == "customer") {
  //       navigation.replace("Home");
  //     }
  //     if (type == "supplier") {
  //       navigation.replace("SupplierScreen");
  //     }
  //     alert("User Added ")
  //   })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       alert(errorMessage);
  //    });

  //  };

  const saveData = async () => {

    if (fullName != null && email != null && password != null) {
      if (!fullName || !email || !password) {
        alert('Please Fill in all the fields to Register an Account!!');
        return;
      }
      if (!/^[a-zA-Z\s]+$/.test(fullName)) {
        alert('Full Name should be in Alphabets!!');
        return;
      }
      if ( !fullName ) {
        alert('Please Enter Your Name also!!');
        return;
      }
      if (!email.includes('@') && password.length < 6) {
        alert('Please Enter valid Email Address and a Password!!');
        return;
      }
      if (!email.includes('@')) {
        alert('Please Enter a valid Email Address!!!');
        return;
      }
      if (password.length < 6) {
        alert('Please Enter a Password with at least 6 Characters!!!');
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const SetUser = async () => {
            await setDoc(doc(db, "Users", auth.currentUser.uid), {
              Email: auth.currentUser.email,
              type: type,
              FullName: fullName,
            });
          };
          SetUser();
          if (type == 'customer') {
            navigation.replace("Home");
          }
          if (type == 'admin') {
            navigation.replace("AdminScreen");
          }
          if (type == 'supplier') {
            navigation.replace("SupplierScreen");
          }
        })
        
    }
    else {
      if (email || password) {
        alert('Please fill in the Full Name field');
        return;
      } else {
        alert('Please fill all the Boxes to Register an Account');
        return;
      }
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
        <View style={{
          alignItems: 'center',
        }}>
          <Image
            source={{
              url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKlzpb_7RNBwvAE6O1fLXiVtVE2DCXw9KUYcW2xzx4goEdRTCAaO7qz4Y_FPFDvS8biI&usqp=CAU'
            }}
            style={{
              height: 50,
              width: 50,
              padding: 10,
              margin: 10,


            }}
          />
          <Text style={{
            fontSize: 40,
            fontWeight: 'normal',
            margin: 30,
            width: 400,
            textAlign: 'center',
            backgroundColor: 'purple',
            color: "white",
            marginRight: 450,
          }}>
            REGISTER
          </Text>

        </View>
        <View>
          <TextInput style={{
            backgroundColor: 'grey',
            fontWeight: 'bold',
            marginLeft: 10,
            width: 360,
            borderRadius: 50,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            margin: 5,
            padding: 5,
            height: 50,
            color: 'white',

          }}
            label="Full Name"
            underlineColor='transparent'
            onChangeText={(Text) => setFullName(Text)}
          />
          {/* <TextInput style={{
      backgroundColor:'grey',
      fontWeight:'bold',
      
    }}
      label="User Name" /> */}
          <TextInput style={{
            backgroundColor: 'grey',
            fontWeight: 'bold',
            marginLeft: 10,
            width: 360,
            borderRadius: 50,
            borderTopStartRadius: 50,
            borderTopEndRadius: 50,
            margin: 5,
            padding: 5,
            height: 50,
            color: 'white',

          }}
            label="Email"
            underlineColor='transparent'
            onChangeText={(Text) => setEmail(Text)}
          />
          <TextInput style={{
            backgroundColor: 'grey',
            fontWeight: 'bold',
            margin: 5,
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
            onChangeText={(Text) => setPassword(Text)}

            secureTextEntry={true} />

        </View>

        <View style={{
          alignItems: 'center',

        }}>
          <TouchableOpacity onPress={() => saveData()} style={{
            backgroundColor: 'green',
            height: 45,
            width: 300,
            padding: 10,
            marginRight: 435,
            margin: 45,
            borderRadius: 15,
            alignItems: 'center',
          }}>
            <Text style={{
              fontSize: 20,
              color: 'white',
              width: 100,
              textAlign: 'center',
              fontWeight: "bold"


            }}>
              Register
            </Text>
            {/* <Text style={{
                margin:10,
                padding:15,
                fontSize:20,
                alignItems:'center',
                color:'white',
                height:40,                
            }}>
                ______OR______
            </Text> */}
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={()=>navigation.navigate("LoginPage")}
        style={{
          backgroundColor:'skyblue',
            
            
            height:45,
            width:310,
            padding:10,
            marginRight:420,
            margin:35,
            borderRadius:15,
            alignItems:'center',
        }}>
            <Text style={{
                fontSize:20,
                width:100,
                textAlign:'center',
                fontWeight:"bold"
                
            }}>
                Resgiter
            </Text>
        </TouchableOpacity> */}
        </View>
      </ImageBackground>
    </View>

  )
}


export default Register

const styles = StyleSheet.create({})