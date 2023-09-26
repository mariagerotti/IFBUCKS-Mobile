import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [selectedTable, setSelectedTable] = useState(''); 
  const handleLogin = () => {
    console.log('CPF:', cpf);
    console.log('Senha:', password);
    console.log('Mesa:', selectedTable);

    if (cpf === password) {
      navigation.navigate('Home');
    } else {
      alert('CPF inválido!');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    setIsEmailValid(emailRegex.test(email));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ifbuckslogo.png')} 
        style={styles.logo}
      />
      <Text style={styles.title}>BEM VINDO</Text>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={setCPF}
        value={cpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Mesa"
        onChangeText={setSelectedTable}
        value={selectedTable}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  logo: {
    marginTop: 120,
    width: 200, 
    height: 200,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#d9d9d9',
  },
  button: {
    width: '50%',
    height: 50,
    backgroundColor: '#8fb090',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorMessage: {
    color: 'red',
    marginBottom: 10,
  },
});
