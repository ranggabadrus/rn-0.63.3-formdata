import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginPage');
    }, 4000)
  }, [navigation])
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ marginTop: 130, marginLeft: 120, width: 150, height: 150 }}>
        <LottieView source={require('../assets/source/21837-movie-clapper-board.json')} autoPlay loop />
      </View>
        <Image source={require('../assets/img/txtsplash.png')} style={{alignSelf: 'center'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 230,
    marginBottom: 20
  },

  textLogo: {
    alignSelf: 'center',
    fontSize: 18
  }
})