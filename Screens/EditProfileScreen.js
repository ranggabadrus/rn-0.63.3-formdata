import Axios from 'axios'
import React,{ useEffect,useState } from 'react'
import { View, Text, ImageBackground, Image, StyleSheet, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {useSelector,useDispatch} from 'react-redux'
import { getUserId } from '../Redux/actions/UserIdActions'
import {GET_USER_URL} from '../Redux/constants/general'
//import {getDataUser} from '../Redux/constants/general'


export default function EditProfileScreen(props) {
  const [data,setData]  =useState([])
  
  
  
  const dispatch = useDispatch()
  const token = useSelector((state)=>state.UserAuthReducers.token) 
  console.log('token :',token)
  useEffect( ()=> { 
     getDataUser(token,GET_USER_URL)
        
  }, [])
  
  const getDataUser = (key,url) =>{
            Axios.get(url,{
              headers : { token : key}
            })
          .then(r=> setData(r.data) )
  }
  
  console.log('data :' ,data)
  
  
  
  
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        
        <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: '#F7F6ED' }}>
          <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '5%' }}>
            <Image source={require('../Sample/img/Vector.png')} style={{ marginLeft: 5, height: 25, width: 30 }} />
            
            <Text style={{ marginLeft: 110, fontSize: 18 }}>Edit Profile</Text>
           
            <TouchableOpacity>
                <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: '55%', height: 20, width: 20 }} />
            </TouchableOpacity>
          </View>

          <View style={{height: '3%'}}>
            {/* <Text>{ data.length!==0 && data.data.profile_image}</Text> */}
            <Text></Text>
          </View>
          <View style={{ backgroundColor: '#FFFFFF', padding: 20, height: '92%' }}>
            <View style={{ alignItems: 'center' }}>
            {  data.length!==0 ?  
                <Image source={{uri:data.data.profile_image}} style={styles.userImage}  />  :
                <Image source={require('../Sample/img/userimage.png')} style={styles.userImage} />}
            
              <TouchableOpacity>
                <Text style={styles.toProfile}>UPLOAD IMAGE</Text>
              </TouchableOpacity>
            </View>

            <View >
              <Text>Full Name</Text>
              <TextInput 
                   value={data.length!==0 && data.data.full_name}
                  style={styles.txtInput} />
              <Text>Email</Text>
              <TextInput 
                  value ={ data.length!==0 && data.data.email }
                style={styles.txtInput} />
              <Text>Description</Text>
              <TextInput style={styles.txtInput2} />
            </View>

            <View style={{ marginTop: '20%', padding: 10 }}>
              <TouchableOpacity
                style={styles.buttonSave}>
                <Text style={{ textAlign: 'center', color: 'white' }}>Save Changes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  toProfile: {
    alignSelf: 'center',
    padding: 10,
    height: 40,
    width: 150,
    borderRadius: 5,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#367874',
    color: '#367874'
  },

  userImage: {
    height: 80,
    width: 80,
    alignSelf: 'center',
    tintColor: '#BBE4D8',
    marginBottom: 20
  },

  txtInput: {
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'black',
    width: '98%',
    alignSelf: 'center',
    height: 40,
    backgroundColor: '#FCFCFC'
  },

  txtInput2: {
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'black',
    width: '98%',
    alignSelf: 'center',
    height: 100,
    backgroundColor: '#FCFCFC'
  },

  buttonSave: {
    alignSelf: 'center',
    backgroundColor: '#367874',
    padding: 10,
    marginTop: '20%',
    height: 40,
    width: '100%',
    borderRadius: 5,
    textAlign: 'center'
  }
})