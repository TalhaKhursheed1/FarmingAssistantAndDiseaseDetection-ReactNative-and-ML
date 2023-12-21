import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, {useEffect}from "react";


const Splash = ({navigation}) => {
    useEffect(()=>{
        setTimeout(()=>{
        navigation.navigate('Users');
        },2000);
    
    },[]);
  return (
    <ImageBackground style={{
        height: 350,
        width: 350,
        marginTop:70,

      }}
      source={{
        url: 'https://png.pngtree.com/svg/20170320/smart_farm_logo_color_434517.png',
      }}
      
    >

    
    <View style={styles.container}>
      <Text style={styles.logo}>Farming Assistant & Disease Detection</Text>
      
    </View>
     </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 20,
        
        marginTop: 280,
        
    },
    logo:{
        fontSize: 30,
        fontWeight: '900',
        
        color: 'black',
        // backgroundColor:'purple',
        
    },
   
});
