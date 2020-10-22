import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function MyProductScreen() {
    return (
        <View style={{ height: '100%', width: '100%' }}>
            <ImageBackground style={{ width: '100%', height: '85%', backgroundColor: '#F7F6ED' }}>
                <View style={{ backgroundColor: '#FFFFFF', flexDirection: 'row', height: '6%' }}>
                    <Image source={require('../Sample/img/Vector.png')} style={{ marginLeft: 10, height: 25, width: 30, marginTop: 7 }} />
                    <Text style={{ marginLeft: 110, fontSize: 18, marginTop: 5 }}>My Products</Text>
                    <TouchableOpacity>
                        <Image source={require('../Sample/img/menu.png')} style={{ marginLeft: 90, height: 20, width: 20, marginTop: 10 }} />
                    </TouchableOpacity>
                </View>


                <View style={{ backgroundColor: '#ffff', width: '90%', height: '17%', marginTop: '5%', alignSelf: 'center', flexDirection: 'row', borderRadius: 5 }}>
                    <Image source={require('../Sample/img/kelapa.jpg')} style={styles.toUpload} />
                    <View>
                        <Text style={{ fontSize: 20, marginBottom: '5%', marginTop: '10%' }}>Kelapa Muda</Text>
                        <Text style={{ fontSize: 17, color: '#DE884A' }}>Rp12.000</Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: '10%', backgroundColor: '#F7F6ED', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: '#F9E0C2', width: '45%', marginLeft: '5%', height: '60%' }}>
                        <TouchableOpacity style={{ height: '6%' }}>
                            <Image source={require('../Sample/img/edit.png')} style={{ width: 30, height: 30, alignSelf: 'center', marginTop: '3%' }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: '#D65445', width: '45%', height: '60%', marginRight: '10%' }}>
                        <TouchableOpacity style={{ height: '6%' }}>
                            <Image source={require('../Sample/img/delete.png')} style={{ width: 30, height: 30, alignSelf: 'center', marginTop: '3%' }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <ImageBackground style={{ width: '100%', height: '15%', backgroundColor: '#FFFFFF' }}>
                <View style={{padding: 10 }}>
                    <TouchableOpacity
                        style={styles.buttonSave}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Create Product</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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