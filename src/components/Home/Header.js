//import React from "react";
//import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from "react-native";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
//
//
//export default function Header({ handleButtonUser, handleMenuPress, userName, selectedTable }) {
//
//  return (
//    <View style={styles.header}>
//      <View style={{flexDirection: "row", alignItems: "center", borderBottomRightRadius: 50,     backgroundColor: "#1e1e1e", padding: 22}}>
//        <Image
//          source={require('')}
//          style={styles.userImage}
//        />
//        <View style={styles.userInfo}>
//          <Text style={styles.userName} onPress={handleButtonUser}>Nome de Usuário{userName}</Text>
//          <Text style={styles.selectedTable}>Mesa 05{selectedTable}</Text>
//        </View>
//      </View>
//      <TouchableOpacity style={{marginRight: 20}} handleMenuPress={handleMenuPress}>
//        <MaterialCommunityIcons name="menu" size={50} color="#787878" />
//      </TouchableOpacity>
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  header: {
//    width: "100%",
//    flexDirection: "row",
//    alignItems: "center",
//    justifyContent: "space-between",
//    border: 'white',
//  },
//  userImage: {
//    width: 50,
//    height: 50,
//    borderRadius: 30,
//    marginRight: 10,
//  },
//  userInfo: {
//    flex: 1,
//  },
//  userName: {
//    color: "white",
//    fontSize: 20,
//  },
//  selectedTable: {
//    color: "white",
//    fontSize: 15,
//  },
//});
//