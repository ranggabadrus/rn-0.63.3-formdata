import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import {GET_PRODUCTS_URL} from "../Redux/constants/general";
import  ListProductComponent from '../Components/ListProductComponent';




const  MyProductScreen  = (props) => {
    const [data,setData]  =useState([])
  
    
    useEffect(() => {
        getProducts(GET_PRODUCTS_URL)    
    }, [])

    
    const getProducts = (url) =>{
        Axios.get(url)
        .then(r=> setData(r.data.products) )
    }
    
    // const Item  = ({ name }) => (
    //         <View>
    //           <Text>{name}</Text>
    //         </View>
    // );
            
    
    
    // const renderItem = ({Item}) =>{
    //     <View>
    //         <Text> {Item.product_name} </Text>    
    //    </View>  
    // }
    
    return (
        <View style={{ flex:1}}>
                    <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '6%' }}>
                         <Image source={require('../Sample/img/Vector.png')} style={{ marginLeft: 10, height: 25, width: 30, marginTop: 7 }} />
                         <Text style={{ marginLeft: 110, fontSize: 18, marginTop: 5 }}>My Products</Text>
                         <TouchableOpacity>
                             <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: 90, height: 20, width: 20, marginTop: 10 }} />
                         </TouchableOpacity>
                    </View>
                    <FlatList
                            data={data}
                            keyExtractor={(key) => key._id}
                            renderItem={ ({item}) => <ListProductComponent product={item} />  }
                     /> 
                     
            
                <View Image style={{ width: '100%', height: '15%', backgroundColor: '#FFFFFF' }} style={{padding: 10 }}>
                    <TouchableOpacity
                        onPress = {()=>props.navigation.navigate('Product')}
                        style={styles.buttonSave}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Create Product</Text>
                    </TouchableOpacity>
                </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    toUpload: {
        margin: '4%',
        height: '80%',
        width: '40%',
        borderRadius: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#367874',
        color: '#367874',
    },
    buttonSave: {
        alignSelf: 'center',
        backgroundColor: '#367874',
        padding: 10,
        marginTop: '5%',
        height: 40,
        width: '100%',
        borderRadius: 7,
        textAlign: 'center'
    }
})
export default MyProductScreen