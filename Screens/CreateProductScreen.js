import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { set, stopClock } from 'react-native-reanimated'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'
import {CREATE_PRODUCTS_URL} from "../Redux/constants/general";
import {useSelector} from 'react-redux';
import Axios from 'axios'

export default function CreateProductScreen(props) {
    const [product_name,setProduct_Name] = useState(null)
    const [category,setCategory] = useState(null)
    const [price,setPrice] = useState(null)
    const [stock,setStock] = useState(null)
    const [product_image,setProduct_Image] = useState('https://placeimg.com/640/480/nature')
    const [description,setDescription] = useState(null)
    const [discount,setDiscount] = useState(10)
    const [weight,setWeight] = useState(10)
    
    const token = useSelector((state)=>state.UserAuthReducers.token) 

    console.log(token)
    const handleOnCreate  =() =>{
        Axios.post(CREATE_PRODUCTS_URL,{
            headers : { token : token },
            data : { product_name,
                    category,
                    description,
                    price,
                    stock,
                    discount,
                    weight,
                    product_image
                  }
        })
    }    
    
    //console.log()
    
    return (

        <ImageBackground style={{ width: '100%', height: '100%', backgroundColor: '#F7F6ED' }}>
            <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '6%' }}>
                <Image source={require('../Sample/img/Vector.png')} style={{ marginLeft: 10, height: 25, width: 30, marginTop: 7 }} />
                <Text style={{ marginLeft: 110, fontSize: 18, marginTop: 5 }}>Create Product</Text>
                <TouchableOpacity>
                    <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: 90, height: 20, width: 20, marginTop: 10 }} />
                </TouchableOpacity>
            </View>

            <View style={{ height: '2%' }} />

            <View style={{ height: '92%', backgroundColor: '#FFFFFF' }}>
                <View style={{ flexDirection: 'row', height: '30%' }}>
                    <Image source={require('../Sample/img/kelapa.jpg')} style={styles.toUploaded} />
                    <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                        <Text style={styles.toUpload}>Upload Image</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: '61%', marginTop: '2%' }} >
                    <Text style={{ marginLeft: '5%' }}>Product Name</Text>
                    <TextInput 
                        value = {product_name}
                        onChangeText ={product_name=>setProduct_Name(product_name)}   
                        style={styles.txtInput} />
                   
                    <Text style={{ marginLeft: '5%' }}>Description</Text>
                    <TextInput 
                        value = {description}
                        onChangeText ={description=>setDescription(description)}   
                        style={styles.txtInput} />
                    
                    <Text style={{ marginLeft: '5%' }}>Category</Text>
                    <TextInput 
                        value = {category}
                        onChangeText ={category=>setCategory(category)}   
                        style={styles.txtInput} />
                    
                    <Text style={{ marginLeft: '5%' }}>Price</Text>
                    <TextInput 
                        value = {price}
                        onChangeText ={price=>setPrice(price)}   
                        style={styles.txtInput} />
                    
                    <Text style={{ marginLeft: '5%' }}>Stock</Text>
                    <TextInput 
                        value = {stock}
                        onChangeText ={stock=>setStock(stock)}   
                        style={styles.txtInput} />

                    <TouchableOpacity
                        onPress ={handleOnCreate}
                        style={styles.buttonSave}>
                        <Text style={{ textAlign: 'center', color: 'white' }}>Create</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>


    )
}

const styles = StyleSheet.create({
    toUpload: {
        alignSelf: 'center',
        padding: 10,
        height: 40,
        width: 150,
        borderRadius: 5,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#367874',
        color: '#367874',
        marginTop: '50%',
        marginLeft: '12%'
    },

    toUploaded: {
        width: '40%',
        height: '80%',
        marginTop: '10%',
        marginLeft: '5%'
    },

    txtInput: {
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 5,
        color: 'black',
        borderColor: 'black',
        width: '90%',
        alignSelf: 'center',
        height: 40
    },

    buttonSave: {
        alignSelf: 'center',
        backgroundColor: '#367874',
        padding: 10,
        marginTop: '15%',
        height: 40,
        width: '90%',
        borderRadius: 5,
        textAlign: 'center'
    }
})