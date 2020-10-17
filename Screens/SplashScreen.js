import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen');
    }, 2000)
  }, [navigation])
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Image source={require('../Sample/img/logo.png')} style={styles.imageLogo}/>
    </View>
  )
}

const styles = StyleSheet.create({
  imageLogo: {
    width: 175,
    height: 80,
    alignSelf: 'center',
    marginTop: 230,
    marginBottom: 20
  },

  textLogo: {
    alignSelf: 'center',
    fontSize: 18
  }
})