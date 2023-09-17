import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Carrinho" component={Cart}/>
            <Tab.Screen name="Perfil" component={Profile}/>
        </Tab.Navigator>
    )
}