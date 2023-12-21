import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { TextInput } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { auth, db } from "../../firebase/firebase.config";
import { addDoc,doc, collection } from "firebase/firestore";

const Complain = () => {
    const  [complains, setComplains] = useState(null);
    const  [name, setName] = useState(null);

    const saveData = async () => {   
    await addDoc(collection(db, "Complains"), {
    Name: name,
    Complains: complains, 
   
   })
   
   .then(()=>{
     alert("Your Complain is Submitted!!");
   });
 };

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
        <Text style={{
            fontSize:30,
            fontWeight:'bold'
           
        }}>
          Complain Here
        </Text>
        <Text>
          _____________________________________________________
        </Text>
        <Text style={{
            fontSize:20,
            padding:10,
        }}>
        Have complain then submit the complain
        </Text>

        <TextInput
        style={{
            padding:5,
        }}
            label="Enter your Name"
            onChangeText={(text) => setName(text)}
        />
        <TextInput
        style={{
            padding:5,
        }}
            label="Complaint"
            onChangeText={(text) => setComplains(text)}
        />

        <TouchableOpacity 
        style={{
            margin:20,
            padding:10,
            backgroundColor:'green',
            borderRadius:15,
            height:40,
            marginTop:50,
            }}
        onPress={() => saveData()}>
            <Text style={{
                textAlign:'center',
                fontSize:20,
                color:'white',
            }}>
                Submit
            </Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default Complain

const styles = StyleSheet.create({})