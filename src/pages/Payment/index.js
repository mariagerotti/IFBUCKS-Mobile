import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Payment(){
    return (
    <View style={styles.container}>
        <Text>
            Página Payment
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