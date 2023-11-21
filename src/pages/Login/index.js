import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Bem Vindo!</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          onChangeText={(text) => setCpf(text)}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signupLink}>
          Não tem uma conta?{''}
          <Text style={styles.signupText} onPress={navigateToCadastro}>Cadastre-se</Text>
        </Text>
      </View>
    </View>
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
    backgroundColor: '#f0f0f0',
    padding: 30,
    borderRadius: 10,
    width: '80%',
    height: '40%',
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
  signupLink: {
    marginTop: 10,
    textAlign: 'center',
  },
  signupText: {
    color: '#8fb190',
    fontWeight: 'bold',
  },
});
