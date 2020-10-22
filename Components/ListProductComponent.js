import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

const ListProductComponent = (props) => {
    
    const currencyFormat = (num) => {
        return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    };
    
    return (
        
        <View ImageBackground style={{backgroundColor: '#F7F6ED',flex:1 }}>
                

                       <View style={{ backgroundColor: '#ffff', width: '90%', height: '60%', marginTop: '5%', alignSelf: 'center', flexDirection: 'row', borderRadius: 5 }}>
                            <Image source={{uri:props.product.product_image}} style={styles.toUpload} />
                            <View>
                                <Text style={{ fontSize: 20, marginBottom: '5%', marginTop: '10%' }}>{props.product.product_name}</Text>
                                <Text style={{ fontSize: 17, color: '#DE884A' }}>{currencyFormat(props.product.price)}</Text>
                            </View>
                        
                        </View>
                        <View style={{ width: '100%', height: 70, backgroundColor: '#F7F6ED', flexDirection: 'row' }}>
                            <View style={{ backgroundColor: '#F9E0C2', width: '45%', marginLeft: '5%', height: '100%' }}>
                                <TouchableOpacity style={{ height: '6%' }}>
                                    <Image source={require('../Sample/img/edit.png')} style={{ width: 30, height: 30, alignSelf:'center', marginTop: '3%' }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ backgroundColor: '#D65445', width: '45%', height: '100%', marginRight: '10%' }}>
                                <TouchableOpacity style={{ height: '6%' }}>
                                    <Image source={require('../Sample/img/delete.png')} style={{ width: 30, height: 30, alignSelf: 'center', marginTop: '3%' }} />
                                </TouchableOpacity>
                            </View>
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
})
export default ListProductComponent

