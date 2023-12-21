import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Bottom from "./Component/Bottom";
import { ImageBackground } from "react-native";
const data = [
  {
    id: 1,
    title: "Crops/فصلیں",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.lPXpSMQPa0Hvvzo9LQ4ZSAHaEo&pid=Api&P=0",
    screen: "Crops",
  },
  {
    id: 2,
    title: "Fruits/پھل",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.GWsdNM8kqn3mZfXgr0b3qAHaGb&pid=Api&P=0",
    screen: "Fruits",
  },
  {
    id: 3,
    title: "Medicines/ادویات",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.RsbgsGGq77qsfEuaeVRhuAHaJm&pid=Api&P=0",
    screen: "Screen3",
  },
];




  const Types = () => {
    const navigation = useNavigation();
    return (
      <View>
      <View>
            <Image style={{
              height:100,
            }}
                  source={{
                    uri:"https://i2.wp.com/bioplasticsnews.com/wp-content/uploads/2020/07/sustainable-intensive-farming.jpeg?resize=1696%2C1048&ssl=1",

                  }}

                  />
          </View>

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
          fontSize:20,
          fontWeight:'bold',
          backgroundColor:'lightgreen',
          textAlign:'center',
          
        }}>
          What you want to sell?
        </Text>
        
        <SafeAreaView>
        <ImageBackground blurRadius={10} style={{ width: '100%',   paddingTop:28 }}
        source={{ uri: "https://i2.wp.com/bioplasticsnews.com/wp-content/uploads/2020/07/sustainable-intensive-farming.jpeg" }}>

        
          <FlatList
            //  horizontal
            // showsHorizontalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate("Crops")}>
                    <Image
                      source={{
                        uri: item.image,
                      }}
                      style={{
                        height: 135,
                        margin: 20,
                        width: 120,
                        marginBottom:10,
                        borderRadius:20,
                        
                      }}
                    />
                  </TouchableOpacity>
                 
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      margin: 5,
                    }}
                  >
                    {item.title}
                  </Text>
                
                </View>
              );
            }}
            keyExtractor={(item) => {
              item.id;
            }}
          />
          </ImageBackground>
           
        </SafeAreaView>
      
      </View>
      
    );
  };


export default Types;

const styles = StyleSheet.create({});
