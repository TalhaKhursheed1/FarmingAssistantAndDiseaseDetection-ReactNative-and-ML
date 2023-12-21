import { StyleSheet, Text, View,TouchableOpacity,Image,SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const Categories = () => {
  const navigation= useNavigation();
  const data=[
  {
    id: 1,
    title:'Pizza',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwulQPQocWSJfw61SsR7w8AfPNex5JuA1F2lx6H8u&s',

  },
  {
    id: 2,
    title:'Pratha Roll',
    image:"https://e7.pngegg.com/pngimages/764/673/png-clipart-kati-roll-kebab-paratha-tikka-street-food-meat-food-recipe.png",
    
  },
  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },
  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },
  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },  {
    id: 3,
    title:'Burger',
    image:"https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
    
  },
  ]
  return (
    <View>
    <Text style={{
        fontSize:25,
        padding:20,
        textAlign:'center',
        backgroundColor:'blue',
        color:'white',
    }}>
        Categories
    </Text>
    <SafeAreaView>
    <TouchableOpacity style={{
      backgroundColor: "green",
            color: "white",
            height: 40,
            width: 250,
            padding: 10,
            margin: 20,
            marginLeft: 70,
            marginRight: 50,
            borderRadius:10,
    }}
    onPress={()=>navigation.navigate("AddNewCategory")}
    >
      <Text style={{
        textAlign:'center',
        fontSize:20,
        color:'white',
    }}>
        Add new Food items 
      </Text>
    </TouchableOpacity>
    
          
        {/* <ScrollView> 
        <View style={{
            flexDirection:'column',

        }}>

        
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwulQPQocWSJfw61SsR7w8AfPNex5JuA1F2lx6H8u&s",
          }}
          style={{
            height: 150,
            margin:20,
            width: 150,
          }}
        />
        <Text
          style={{
            marginVertical:20,
           
            
            fontSize:25,
            
          }}
        >
          Pizza
        </Text> 
        <Image
          source={{
            uri: "https://e7.pngegg.com/pngimages/764/673/png-clipart-kati-roll-kebab-paratha-tikka-street-food-meat-food-recipe.png",
          }}
          style={{
            height: 150,
            width: 150,
            margin:10,
          }}
        />
        <Text
          style={{
            fontSize:25,
            
            marginVertical:20,
            width:110,
           
          }}
        >
          PrathaRoll
        </Text> 
        <Image
          source={{
            uri: "https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
          }}
          style={{
            height: 150,
            width: 180,
          }}
        />
        <Text
          style={{
            fontSize:25,
            width:80,
            
            
          }}
        >
          Burger
        </Text> 
        </View>
        </ScrollView>  */}
        {/* <ScrollView> 
        <View style={{
            flexDirection:'column',
            
        }}>

        
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwulQPQocWSJfw61SsR7w8AfPNex5JuA1F2lx6H8u&s",
          }}
          style={{
            height: 150,
            margin:20,
            width: 150,
          }}
        />
        <Text
          style={{
            marginVertical:20,
           
            
            fontSize:25,
            
          }}
        >
          Pizza
        </Text> 
        <Image
          source={{
            uri: "https://e7.pngegg.com/pngimages/764/673/png-clipart-kati-roll-kebab-paratha-tikka-street-food-meat-food-recipe.png",
          }}
          style={{
            height: 150,
            width: 150,
            margin:10,
          }}
        />
        <Text
          style={{
            fontSize:25,
            
            marginVertical:20,
            width:110,
           
          }}
        >
          PrathaRoll
        </Text> 
        <Image
          source={{
            uri: "https://e7.pngegg.com/pngimages/315/302/png-clipart-kfc-chicken-sandwich-cheeseburger-fast-food-fried-chicken-zinger-burger-kfc-chicken-sandwich-thumbnail.png",
          }}
          style={{
            height: 150,
            width: 180,
          }}
        />
        <Text
          style={{
            fontSize:25,
            width:80,
            
            
          }}
        >
          Burger
        </Text> 
        </View>
        </ScrollView>   
        */}
        <FlatList
      //  horizontal
        // showsHorizontalScrollIndicator={false}
          data={data} 
          numColumns={2}
          renderItem={({item})=> {
            return(
              <View>
<Image
          source={{
            uri: item.image
            }}
          style={{
            height: 150,
            margin:20,
            width: 150,
          }}
        />
              </View>
            )
          }}
          
          keyExtractor={(item=> {item.id})}
    />
    </SafeAreaView>



    
        
        
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})