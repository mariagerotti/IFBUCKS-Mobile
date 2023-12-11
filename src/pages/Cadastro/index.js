import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [perfilImage, setPerfilImage] = useState(null);

  //const navigation = useNavigation();

  const handleCadastro = () => {
    
    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Email:', email);
    console.log('CPF:', cpf);
    console.log('Imagem de Perfil:', perfilImage);
  };

  const handleImagePicker = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Escolha uma imagem',
        storageOptions: {
          skipBackup: true,
          path: 'images',
        },
      },
      (response) => {
        if (response.didCancel) {
          console.log('Usuário cancelou a escolha de imagem');
        } else if (response.error) {
          console.error('Erro ao escolher a imagem:', response.error);
        } else {
          
          setPerfilImage(response.uri);
        }
      }
    );
  };

  return (
    <ImageBackground
    source={require('../../assets/fundo.png')} 
    style={styles.container}
    >
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Cadastro</Text>
        <TouchableOpacity onPress={handleImagePicker}>
          {perfilImage ? (
            <Image source={{ uri: perfilImage }} style={styles.perfilImage} />
          ) : (
            <Text style={styles.perfilImagePlaceholder}>Adicionar Foto de Perfil</Text>
          )}
        </TouchableOpacity>
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
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

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
  cadastroButton: {
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
  cadastroButton: {
    color: '#8fb190',
    fontWeight: 'bold',
    marginTop: 50,
  },
});