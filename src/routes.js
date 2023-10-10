import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Login from './pages/Login';

import CartButton from "./components/Navigation/CartButton";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Importe AsyncStorage

const Tab = createBottomTabNavigator();

export default function Routes() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Verifique se há um token de autenticação armazenado em AsyncStorage (isso é apenas um exemplo)
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem('authToken');
        if (token) {
          // Se houver um token, o usuário está logado
          setLoggedIn(true);
        } else {
          // Se não houver um token, o usuário não está logado
          setLoggedIn(false);
        }
      } catch (error) {
        console.error('Erro ao verificar o status de login:', error);
      }
    };

    // Chame a função de verificação de login
    checkLoginStatus();
  }, []); // Certifique-se de fornecer um array de dependências vazio para que o useEffect seja executado apenas uma vez

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#FFF',
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: '#1e1e1e',
            paddingBottom: 5,
            paddingTop: 5,
          },
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Cart}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ size, color }) => (
            <CartButton size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={loggedIn ? Profile : Login}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
