import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import Rectangle35 from '../Sample/img/Rectangle35.png'
import Rectangle6 from '../Sample/img/Rectangle6.png'
import {menuImage} from '../Constans/Images' 
import { TextInput } from 'react-native-paper'
import menu from '../Sample/img/menu.png'
import {useSelector} from 'react-redux'



const HomeScreen = () => {
  //const nama = useSelector((state)=>state.first)
  //alert(nama)
  return (
    <View style={{margin:10,flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',
                      }}>
            <View>
                <Image  source={require('../Sample/img/Vector.png')} 
                style={{width:30,height:30}} />
            </View>
            <View>
                <TextInput style={{width:270,height:30,
                borderRadius:20
                  
                }}></TextInput>
            </View>
            <View>
                <Image  source={menu} style={{width:30,height:30}} />
            </View>
        </View>
        


        <View>
          <Image source={Rectangle35} style={{
          position : 'absolute',
          width:480,height:150}} />
          <Image source={Rectangle6} style={{
           position:'relative',
           top:10,left : 110,
          width:300,height:140}} />
          <View style={{position:'absolute',top:10,marginLeft:5}}>
            <Text style={{color:'white',fontSize:20,fontFamily:'inter'}}>Fresh Fruits and Vegetables,</Text>
            <Text style={{color:'white',fontSize:20}}>at Your Doorstep</Text>
          </View>
          
        </View>
        
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
