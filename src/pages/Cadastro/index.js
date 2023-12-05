import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');

  const navigation = useNavigation();

  const handleCadastro = () => {
   
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Email:', email);
    console.log('CPF:', cpf);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="numeric"
          onChangeText={(text) => setIdade(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          secureTextEntry={true}
          onChangeText={(text) => setCpf(text)}
        />
        <TouchableOpacity style={styles.cadastroButton} onPress={handleCadastro}>
          <Text style={styles.cadastroButtonText}>Cadastrar</Text>
        </TouchableOpacity>
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
    height: '60%', 
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
  cadastroButton: {
    backgroundColor: '#8fb190',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cadastroButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
