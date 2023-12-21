import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Bottom = () => {
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <View>
          
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity 
          // onPress={()=> navigation.navigate('SupplierScreen') } 
          style={styles.bottomTab}>
            <Image style={styles.bottomTabImg}
              source={{
                uri:'https://tse1.mm.bing.net/th?id=OIP.gUFOcWkBJqJzZ6xCyf3EswHaHM&pid=Api&rs=1&c=1&qlt=95&w=124&h=120',
              }}
            />
             <Text>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} 
           onPress={()=> navigation.navigate('MyAdds') } >
          <Image style={styles.bottomTabImg}
              source={{
                uri:'https://tse2.mm.bing.net/th?id=OIP.faxmPWzKf3GoNIOByuJcNgHaHa&pid=Api&P=0&h=180',
              }}
            />
             <Text>
              My Adds
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottomTab} 
           onPress={()=> navigation.navigate('Blogs') } >
          <Image style={styles.bottomTabImg}
              source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWc9vIy2RpmZ6x9Xkohk5jxPhdWh_RptwfA&usqp=CAU',
              }}
            />
             <Text>
              Blogs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} 
           onPress={()=> navigation.navigate('News') } >
          <Image style={styles.bottomTabImg}
              source={{
                uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWc9vIy2RpmZ6x9Xkohk5jxPhdWh_RptwfA&usqp=CAU',
              }}
            />
             <Text>
              News
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTab} 
          onPress={()=> navigation.navigate('Account') }    >
          <Image style={styles.bottomTabImg}
              source={{
                uri:'https://tse1.mm.bing.net/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120',
              }}
            />
            <Text>
              Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  };


export default Bottom;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: "100%",
    height: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
  },
  bottomTab: {
    height: "150%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabImg: {
    width: 25,
    height: 25,

  },
});
