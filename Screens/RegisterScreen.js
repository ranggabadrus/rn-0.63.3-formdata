import React, { useState } from 'react'
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Button, handleSubmit, ImageBackground } from 'react-native';
import 'react-native-gesture-handler';

const RegisterScreen = ({ navigation }) => {


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>

          <ImageBackground style={{ backgroundColor: 'white' }}>
            <ImageBackground style={styles.imageBackground1}>
              <Image source={require('../Sample/img/logo.png')} style={styles.imageLogo} />
            </ImageBackground>
            
            <ImageBackground style={{ backgroundColor: '#F7F6ED' }}>
              <ImageBackground style={{ width: '100%', height: '20%' }}>
                <View>
                  <ImageBackground source={require('../Sample/img/gambar.png')}
                    style={styles.imageBody} />
                </View>
              </ImageBackground>

              <ImageBackground style={styles.imageBackground2}>

                <View style={{ backgroundColor: 'white', padding: 10, width: '90%', alignSelf: 'center' }}>
                  <Text style={styles.headerSignIn}>Sign Up</Text>
                  <Text style={styles.fillText}>Fullname</Text>
                  <TextInput style={styles.txtInput} />
                  <Text style={styles.fillText}>Email</Text>
                  <TextInput style={styles.txtInput} />
                  <Text style={styles.fillText}>Password</Text>
                  <TextInput style={styles.txtInput} secureTextEntry={true} />
                  <Text style={styles.fillText}>Confirm Password</Text>
                  <TextInput style={styles.txtInput} secureTextEntry={true} />

                  <TouchableOpacity
                    style={styles.buttonLogin}>
                    <Text style={styles.txtSignin}>Sign Up</Text>
                  </TouchableOpacity>

                  <View style={{ alignSelf: 'center', flexDirection: 'row' }} >
                    <Text>Already have an account?</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('LoginScreen')}>
                      <Text style={{ color: '#4f6e65' }}> Sign In</Text>
                    </TouchableOpacity>
                  </View>

                </View>

                <View>
                  <View style={{ borderTopWidth: 1, width: '90%', alignSelf: 'center', borderTopColor: '#C4C4C4' }}></View>
                  <Text style={{ color: '#367874', alignSelf: 'center' }}>2020, SayurHub</Text>
                </View>

              </ImageBackground>
            </ImageBackground>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const { width, height } = Dimensions.get('window');



const styles = StyleSheet.create({
  imageBody: {
    width: 250,
    height: 250,
    alignSelf: 'flex-start',
  },

  headerSignIn: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center'
  },

  imageLogo: {
    height: 40,
    width: 85,
    alignSelf: 'center',
    marginTop: 10
  },

  buttonLogin: {
    alignSelf: 'center',
    backgroundColor: '#BBE4D8',
    padding: 10,
    marginBottom: 15,
    height: 40,
    width: 280,
    borderRadius: 5,
    textAlign: 'center'
  },

  fillText: {
    marginLeft: '10%',
    color: 'black',
    marginBottom: 3
  },

  container: {
    flex: 1,
    justifyContent: "center"
    // paddingHorizontal: 10
  },

  imageBackground1: {
    width: width,
    height: '10%'
  },

  imageBackground2: {
    width: '100%',
    height: '70%',

  },

  textPress: {
    alignSelf: 'center',
    marginTop: 8,
  },

  txtInput: {
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'black',
    width: '98%',
    alignSelf: 'center',
    height: 40
  },

  txtSignin: {
    textAlign: 'center',
    color: 'black'
  },

})

export default RegisterScreen;