import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('CPF:', cpf);
  };
  
  const navigateToCadastro = () => {
    navigation.navigate('Cadastro');
  };
  
  return (
    <ImageBackground
      source={require('../../assets/fundo.png')} 
      style={styles.container}
    >
      <View >
        <View style={styles.formContainer}>
          <Text style={styles.title}>Bem Vindo!</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text) => setCpf(text)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text >
            Não tem uma conta?{''}
            <TouchableOpacity style={styles.signupText} onPress={navigateToCadastro}>
              <Text style={styles.signupLink}> Cadastre-se agora</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formContainer: {
    backgroundColor: 'rgba(240, 240, 240, 0.9)',
    padding: 30,
    borderRadius: 10,
    width: '80%',
    height: '62%',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#8fb190',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 10,
    textAlign: 'center',
  },
  signupLink: {
    color: '#8fb190',
    fontWeight: 'bold',
    marginTop: 10,
  },
});