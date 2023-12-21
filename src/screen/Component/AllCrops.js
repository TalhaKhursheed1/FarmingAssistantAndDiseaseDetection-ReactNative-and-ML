import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const AllCrops = () => 
{const navigation = useNavigation();
  return (
   
    <View>

    <View style={styles.header}>
         
    <ImageBackground blurRadius={10} style={{ width: '100%' }}
        source={{ uri: "https://i2.wp.com/bioplasticsnews.com/wp-content/uploads/2020/07/sustainable-intensive-farming.jpeg" }}>
        
       
         <TouchableOpacity 
        onPress={()=> navigation.navigate('Cropss') }
         >
           <Image source={{
             uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbf2Lb-mDTCSsnTyXHO3D3p9uasolKGUfSmQ&usqp=CAU'
           }} style={styles.buttonImage} />
          <Text style={styles.buttonText}>crops</Text>
         </TouchableOpacity>
         <TouchableOpacity 
          onPress={()=> navigation.navigate('Fruitss') }
          >
           <Image source={{
               uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwtET-zfsf9p73TmAeXbRBa8yk55-P9GnlOQ&usqp=CAU'
           }} style={styles.buttonImage} />
           <Text style={styles.buttonText}></Text>
         </TouchableOpacity>
         {/* <TouchableOpacity 
          onPress={()=> navigation.navigate('Medicinals') }
          >
           <Image source={{
               uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvqhY8w6FSgxT-NtiW3V_rE0KXzqUIqdMRQ&usqp=CAU'
           }} style={styles.buttonImage} />
           <Text style={styles.buttonText}>Medicinal</Text>
         </TouchableOpacity> */}
         </ImageBackground>
       </View>
  

        
          
        </View>

  );
};

export default AllCrops;

const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#eee',
      width:400,
      
     
    },
    // button: {
    //   padding: 5,
    //   backgroundColor: '#007bff',
    //   borderRadius: 25,
    //   margin:10,
    
      
    // },
    buttonText: {
      color: 'Black',
      fontSize: 15,
      fontWeight: 'bold',
      padding:3,
    },
    content: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonImage: {
        width: 40,
        height: 40,
        borderRadius:20,
        margin:5,
      
      },
  });
