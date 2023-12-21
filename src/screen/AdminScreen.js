import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button,Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
const AdminScreen = () => {
  const navigation = useNavigation();
  const [inputData, setInputData] = useState('');
  
  const handleInputData = (text) => {
    setInputData(text);
  };

  const handleSubmission = () => {
    // Submit inputData to database
    setInputData('');
  };

  return (
  
    

    <View 
    
    style={styles.container}>

    <Text style={{
      height:50,
      textAlign:'center',
      marginTop:50,
      fontSize:30,
      fontWeight:'bold',
    }}>
      Admin  
    </Text>

   
      <TextInput
        style={styles.input}
        placeholder="Enter new crop/farmer info"
        onChangeText={handleInputData}
        value={inputData}
      />
      <Button
        title="Submit"
        onPress={handleSubmission}
      />
      <Text style={styles.message}>
        {/* Display feedback or error messages here */}
      </Text>

      <View>
        <View style={styles.header}>
         
          
          <TouchableOpacity style={styles.button}
          onPress={()=> navigation.navigate('Postnews') }>
          
            <Text style={styles.buttonText}>Post news</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
           onPress={()=> navigation.navigate('Postblogs') }>
            <Text style={styles.buttonText}>Post Blogs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={()=> navigation.navigate('CheckComplains') } >
            <Text style={styles.buttonText}>Checks Complains</Text>
          </TouchableOpacity>
          
        </View>
    </View>
  





    
      <View style={styles.container}>
        <View style={styles.bottomView}>
          <TouchableOpacity 
          // onPress={()=> navigation.navigate('SupplierScreen') } 
          style={styles.bottomTab}>
            <Image style={styles.bottomTabImg}
              source={{
                uri:'https://tse1.mm.bing.net/th?id=OIP.gUFOcWkBJqJzZ6xCyf3EswHaHM&pid=Api&rs=1&c=1&qlt=95&w=124&h=120',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} 
          onPress={()=> navigation.navigate('Account') }    >
          <Image style={styles.bottomTabImg}
              source={{
                uri:'https://tse1.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120',
              }}
            />
          </TouchableOpacity>
        </View>
      </View>














    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 15,
     
    },
    button: {
      padding: 5,
      backgroundColor: '#007bff',
      borderRadius: 25,
      margin:0,
      
    },
    buttonText: {
      color: '#fff',
      fontSize: 15,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomView: {
      width: "100%",
      height: 50,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
      backgroundColor: "#fff",
    },
    bottomTab: {
      height: "100%",
      width: "20%",
      justifyContent: "center",
      alignItems: "center",
    },
    bottomTabImg: {
      width: 35,
      height: 35,
  
    },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 10,
  },
  message: {
    marginTop: 20,
    color: 'red',
  },
});

export default AdminScreen;
