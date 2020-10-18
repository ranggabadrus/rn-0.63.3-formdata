import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Rectangle35 from '../Sample/img/Rectangle35.png'
import Rectangle6 from '../Sample/img/Rectangle6.png'
import {menuImage} from '../Constans/Images' 
import { TextInput } from 'react-native-paper'
import menu from '../Sample/img/menu.png'
import {useSelector} from 'react-redux'


const HomeScreen = () => {
  const nama = useSelector((state)=>state)
  alert(nama.middle)
  return (
    <View style={{margin:0,flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',
                      margin :5}}>
            <View>
                <Image  source={require('../Sample/img/Vector.png')} 
                style={{width:40,height:40}} />
            </View>
            <View>
                <TextInput style={{width:270,height:40,
                borderRadius:20
                  
                }}></TextInput>
            </View>
            <View>
                <Image  source={menu} style={{width:40,height:40}} />
            </View>
        </View>
        <Text> saya</Text>
        


        <View>
          <Image source={Rectangle35} style={{
          position : 'absolute',
          width:480,height:150}} />
          <Image source={Rectangle6} style={{
           position:'relative',
           top:10,left : 110,
          width:300,height:120}} />
          <View style={{position:'absolute',top:10}}>
            <Text style={{fontWeight:'bold',fontSize:20}}>Fresh Fruits and Vegetables,</Text>
            <Text style={{fontWeight:'bold',fontSize:20}}>at Your Doorstep</Text>
          </View>
          
        </View>
        
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
