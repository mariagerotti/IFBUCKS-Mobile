import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

import CartButton from "./components/Navigation/CartButton";
import {Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator 
        screenOptions={{
            tabBarActiveTintColor: '#FFF',
            tabBarStyle: [
              {
                display: 'flex',
                backgroundColor: '#1e1e1e',
                paddingBottom:5,
                paddingTop:5,
              },
            ],
          }}>
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name="home" size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            name="Carrinho" 
            component={Cart}
            options={{
                tabBarLabel:'',
                tabBarIcon: ({size, color}) => (
                    <CartButton size={size} color={color}/>
                )
            }}
            />
            <Tab.Screen 
            name="Perfil" 
            component={Profile}
            options={{
                tabBarIcon: ({size, color}) => (
                    <Feather name="user" size={size} color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    )
}