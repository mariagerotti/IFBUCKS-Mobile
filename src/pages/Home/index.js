import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Header from "../../components/Home/Header";

export default function Home(){
    return (
    <View style={styles.container}>
        <Text>
            <Header/>
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