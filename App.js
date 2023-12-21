import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import LoginScreen from './src/screen/LoginScreen';
import Main from './src/screen/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SupplierScreen from './src/screen/SupplierScreen';
import Register from './src/screen/Register';
// import Profile from './src/screen/Profile';
// import Order from './src/screen/Order';
import { auth } from './firebase/firebase.config';
// import AddNewCategory from './src/screen/AddNewCategory';
import CustomerScreen from './src/screen/CustomerScreen';
import Splash from './src/screen/Splash';
import AdminScreen from './src/screen/AdminScreen';
import Users from './src/screen/Users';
import Categories from './src/screen/Component/Categories';
import Topbar from './src/screen/Component/Topbar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Bottom from './src/screen/Component/Bottom';
import Types from './src/screen/Types';
import Crops from './src/screen/Crops';
import Fruits from './src/screen/Fruits';
import Account from './src/screen/Account';
import Weather from './src/screen/Weather';
import Complain from './src/screen/Complain';
import MyAdds from './src/screen/MyAdds';
import Diseases from './src/screen/Disease/Diseases';
import CheckComplains from './src/screen/CheckComplains';
import Postnews from './src/screen/Postnews';
import Postblogs from './src/screen/Postblogs';
import AllCrops from './src/screen/Component/AllCrops';
import Cropss from './src/screen/AllCrops/Cropss';
import Fruitss from './src/screen/AllCrops/Fruitss';
import News from './src/screen/AllCrops/News';
import Blogs from './src/screen/AllCrops/Blogs';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
     
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
      <Stack.Screen
        name="Splash" component={Splash}/>
    <Stack.Screen
        name="Users" component={Users}/>
    <Stack.Screen 
        name="LoginPage" component={LoginScreen}/>
         <Stack.Screen
        name="Register" component={Register}/>  
      <Stack.Screen
        name="Main" component={Main}/>
         <Stack.Screen
        name="Home" component={HomeScreen} />
        <Stack.Screen
        name="SupplierScreen" component={SupplierScreen} />
        <Stack.Screen
        name="CustomerScreen" component={CustomerScreen}/>
         <Stack.Screen
        name="AdminScreen" component={AdminScreen}/>
        <Stack.Screen
        name="Categories" component={Categories}/>
         <Stack.Screen
        name="Topbar" component={Topbar} />
         <Stack.Screen
        name="Bottom" component={Bottom} />
         <Stack.Screen
        name="Types" component={Types} />
         <Stack.Screen
        name="Crops" component={Crops} />
        <Stack.Screen
        name="Fruits" component={Fruits} />
        <Stack.Screen
        name="Account" component={Account} />
        <Stack.Screen
        name="Weather" component={Weather} />
        <Stack.Screen
        name="Complain" component={Complain} />
        <Stack.Screen
        name="MyAdds" component={MyAdds} />
         <Stack.Screen
        name="Diseases" component={Diseases} />
         <Stack.Screen
        name="CheckComplains" component={CheckComplains} />
         <Stack.Screen
        name="Postnews" component={Postnews} />
         <Stack.Screen
        name="Postblogs" component={Postblogs} />
          <Stack.Screen
        name="AllCrops" component={AllCrops} />
        <Stack.Screen
        name="Cropss" component={Cropss} />
        <Stack.Screen
        name="Fruitss" component={Fruitss} />
        <Stack.Screen
        name="News" component={News} />
         <Stack.Screen
        name="Blogs" component={Blogs} />
        
        


         
       
       
       
       

       
       
{/* 
      <Stack.Screen
        name="Categories" component={Categories} /> */}
         {/* <Stack.Screen
        name="Topbar" component={Topbar} /> */}
      {/* <Stack.Screen
        name="Profile" component={Profile}/>
      <Stack.Screen
        name="Order" component={Order}/> */}
      {/* <Stack.Screen
        name="AddNewCategory" component={AddNewCategory}/> */}
      

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
