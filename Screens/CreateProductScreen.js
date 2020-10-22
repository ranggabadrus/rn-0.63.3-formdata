import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'

export default function CreateProductScreen(props) {
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
                    <TextInput style={styles.txtInput} />
                    <Text style={{ marginLeft: '5%' }}>Description</Text>
                    <TextInput style={styles.txtInput} />
                    <Text style={{ marginLeft: '5%' }}>Category</Text>
                    <TextInput style={styles.txtInput} />
                    <Text style={{ marginLeft: '5%' }}>Price</Text>
                    <TextInput style={styles.txtInput} />
                    <Text style={{ marginLeft: '5%' }}>Stock</Text>
                    <TextInput style={styles.txtInput} />

                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('CreateProductScreen2')}
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