import React from 'react'
import { Image, Text, View, ImageBackground } from 'react-native'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from "expo-image-picker"
import { Camera } from 'expo-camera'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const CreateFormData = (uri) => {
  const fileName = uri.split('/').pop()
  const fileType = fileName.split('.').pop()
  const formData = new FormData()
  formData.append('file', {
    uri,
    name: fileName,
    type: `image/${fileType}`
  })

  return formData
}

const Diseases = () => {
  const [imgUrl, setImgUrl] = React.useState(null)
  const [disease, setDisease] = React.useState(null)
  const [confidence, setConfidence] = React.useState(null)

  const [hasPermission, setHasPermission] = React.useState(null)

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const GetPredication = async (file) => {
    const endpoint = 'https://us-central1-nice-aegis-388011.cloudfunctions.net/predict'
    const response = await axios.post(endpoint,
      CreateFormData(file),
      { headers: { 'Content-Type': 'multipart/form-data' } }
    )

    const data = await response.data
    setDisease(data.class)
    setConfidence(data.confidence)
  }

  const ManageCamera = async (type) => {
    if (type === 'Camera') {
      OpenCamera()
    } else {
      OpenLibrary()
    }
  }

  const OpenCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync()
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!')
      return
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result?.cancelled) {
      setImgUrl(result.assets[0].uri)
      GetPredication(result.assets[0].uri)
    }
  }

  const OpenLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result?.cancelled) {
      setImgUrl(result.assets[0].uri)
      GetPredication(result.assets[0].uri)
    }
  }

  if (hasPermission === null) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>Requesting for camera permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 22 }}>No access to camera</Text>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground blurRadius={10} style={{ width: '100%', flex: 1, gap: 48, paddingTop: 48 }}
        source={{ uri: "https://i2.wp.com/bioplasticsnews.com/wp-content/uploads/2020/07/sustainable-intensive-farming.jpeg" }}>
        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: 'yellow' }}>
          Disease Detection
        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => ManageCamera('Camera')}
            style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}>
            <MaterialCommunityIcons name="camera" size={48} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => ManageCamera('Photo')}
            style={{ backgroundColor: 'white', padding: 12, borderRadius: 8 }}>
            <MaterialCommunityIcons name="image" size={48} color="black" />
          </TouchableOpacity>
         
        </View>
        


        {
          imgUrl &&
          <Image source={{ uri: imgUrl }} style={{ width: '80%', aspectRatio: 4 / 3, alignSelf: 'center' }} />
        }

        {
          disease && confidence &&
          <View>
            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'yellow', textAlign: 'center' }}>{disease}</Text>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: 'yellow', textAlign: 'center' }}>{confidence} %</Text>
          </View>
        }
      </ImageBackground>
    </View>
  )
}

export default Diseases