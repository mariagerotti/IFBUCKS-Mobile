import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {Feather} from '@expo/vector-icons'

export default function CartButton({ size, color}){
    return(
        <View style={styles.container}>
            <Feather name="shopping-cart" color={color} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: 60,
        height: 60,
        borderRadius:60,
        backgroundColor:'#004c03',
        alignItems:'center',
        justifyContent: 'center',
        marginBottom:10,
    }
})