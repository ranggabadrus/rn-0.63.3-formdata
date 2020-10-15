import React, { Component, useState } from 'react';
import { Text, View, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';


const LoginPage = ({ navigation }) => {


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "android" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>

          <ImageBackground style={styles.imageBackground1}>
            <Image source={require('../assets/img/logo.png')} style={styles.imageLogo} />
          </ImageBackground>

          <ImageBackground style={styles.imageBackground2}>
            <ImageBackground source={require('../assets/img/gambar.png')}
              style={styles.imageBody} />


            <View style={{ backgroundColor: 'white', padding: 20, width: '90%', alignSelf: 'center' }}>
              <Text style={styles.headerSignIn}>Sign In</Text>
              <Text style={styles.fillText}>Email</Text>
              <TextInput style={styles.txtInput} />
              <Text style={styles.fillText}>Password</Text>
              <TextInput style={styles.txtInput} secureTextEntry={true} />

              <TouchableOpacity
                style={styles.buttonLogin}>
                <Text style={styles.txtSignin}>Sign In</Text>
              </TouchableOpacity>

              <View style={{ alignSelf: 'center', flexDirection: 'row' }} >
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('RegisterPage')}>
                  <Text style={{ color: '#4f6e65' }}> Sign Up</Text>
                </TouchableOpacity>
              </View>

            </View>

            <View>
              <View style={{ borderTopWidth: 1, width: '90%', alignSelf: 'center', borderTopColor: '#C4C4C4' }}></View>
              <Text style={{ color: '#367874', alignSelf: 'center' }}>2020, SayurHub.</Text>
            </View>

          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

  )
}

const { width, height } = Dimensions.get('window');

const Stack = createStackNavigator();



const styles = StyleSheet.create({
  imageBody: {
    width: 250,
    height: 250,
    alignSelf: 'flex-start',
  },

  headerSignIn: {
    color: 'black',
    fontSize: 22,
    alignSelf: 'center'},

  imageLogo: {
    height: 50,
    width: 50,
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
    height: '90%',
    backgroundColor: '#F7F6ED'
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

export default LoginPage;
