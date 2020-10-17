import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

export default function EditprofileScreen() {
  return (
    <ImageBackground style={{width: '100%', height: '100%', backgroundColor: '#F7F6ED'}}>
      <View>
        <Image source={require('../Sample/img/logo.png')} />
      </View>
    </ImageBackground>
  )
}
