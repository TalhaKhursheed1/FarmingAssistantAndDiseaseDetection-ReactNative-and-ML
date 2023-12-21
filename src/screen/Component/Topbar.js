import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Topbar = () => 
{const navigation = useNavigation();
  return (
    <View>
    <ImageBackground>

    
        <View style={styles.header}>
         
          
          <TouchableOpacity style={styles.button}
          onPress={()=> navigation.navigate('Types') }>
            <Text style={styles.buttonText}>Post Adds/اشتہار</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}
           onPress={()=> navigation.navigate('Diseases') }>
            <Text style={styles.buttonText}>Diseases/بیماریاں</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonss}
           onPress={()=> navigation.navigate('Weather') }>
            <Text style={styles.buttonText}>Weather/موسم</Text>
          </TouchableOpacity>
          
        </View>
        </ImageBackground>
    </View>
  );
};

export default Topbar;

const styles = StyleSheet.create({
  container: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'skyblue',
      padding: 5,
     
    },
    button: {
      padding: 5,
      backgroundColor: 'green',
      backfaceVisibility:'hidden',
      borderRadius: 25,
      margin:0,
      
    },
  buttons: {
      padding: 5,
      backgroundColor: 'red',
      backfaceVisibility:'hidden',
      borderRadius: 25,
      margin:0,
    },
    buttonss: {
      padding: 5,
      backgroundColor: 'blue',
      backfaceVisibility:'hidden',
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
  });
