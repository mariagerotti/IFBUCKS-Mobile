import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const HomeStack = createStackNavigator();

function HomeScreen() {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Page1" component={Page1} />
      <HomeStack.Screen name="Page2" component={Page2} />
    </HomeStack.Navigator>
  );
}
