import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Login(){
    return (
    <View style={styles.container}>
        <Text>
            Página Login
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItens: 'center',
    }
});