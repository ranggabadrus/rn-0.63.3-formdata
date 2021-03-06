import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import back from './../Sample/img/back.png'
import Vector from './../Sample/img/Vector.png'
import {useSelector} from 'react-redux'

export default function AboutMeScreen(props) {
  //const nama = useSelector((state)=>state.middle)
  //alert(nama)
  return (

    <View>
      <View style={styles.imgBackground1}>

        <View>
          <TouchableOpacity>
            <Image source={back} style={styles.logoBack} />
          </TouchableOpacity>
        </View>

        <View>
          <Image source={Vector} style={styles.logoImage} />
        </View>
      </View>

      <View style={styles.imgBackground2}>
        <Image source={require('../Sample/img/robert.png')} style={styles.imageRobert} />
        <Text>Robert E.O Speedwagon</Text>
      </View>

      <View style={styles.divider} />

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity 
        onPress={() => props.navigation.navigate('MyProduct')}
        style={{ marginBottom: 6 }}>
          <Text>My Products</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 6 }}>
          <Text>Transaction History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 6 }}>
          <Text>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => props.navigation.navigate('Create Product')}
        style={{ margin: 6 }}>
          <Text>Sell Product</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => props.navigation.navigate('EditProfile')}
        style={{ margin: 6 }}>
          <Text style={styles.toProfile}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={{ margin: 5 }}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ margin: 5 }}>
          <Text>Browse</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonLogOut}>
          <Text style={{ textAlign: 'center', color: 'white' }}>Log Out</Text>
        </TouchableOpacity>


      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  imgBackground1: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  imgBackground2: {
    width: '100%',
    height: '85%',
  },

  logoBack: {
    height: 20,
    width: 20,
    marginLeft: '5%'
  },

  logoImage: {
    height: 25,
    width: 30,
    marginRight: '5%'
   // marginLeft: 10
  },

  imgBackground2: {
    alignItems: 'center',
    alignSelf: 'center',

  },

  imageRobert: {
    width: 70,
    height: 70,
    marginTop: 10,
    marginBottom: 10
  },

  divider: {
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    margin: 20,
    borderBottomColor: 'black'
  },

  toProfile: {
    alignSelf: 'center',
    padding: 10,
    marginBottom: 15,
    height: 40,
    width: 300,
    borderRadius: 10,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'orange',
    color: 'orange'
  },

buttonLogOut: {
    alignSelf: 'center',
    backgroundColor: '#D65445',
    padding: 10,
    marginTop: '20%',
    height: 40,
    width: 250,
    borderRadius: 50,
    textAlign: 'center'
  }


})