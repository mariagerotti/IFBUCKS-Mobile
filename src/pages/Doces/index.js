import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Home/Header'; 
import Card from '../../components/Home/Card';

const DoceScreen = () => {
  const userPhoto = 'https://avatars.githubusercontent.com/u/48130339?v=4';
  const username = 'Eduardo da Silva';
  const tableNumber = 5; 

  const product = {
    imageProduct: 'https://encurtador.com.br/lwzJL', 
    nome: 'Torta',
    preco: 10.00,
    descricao: 'Descrição do Produto',
  }
  return (
    <View style={styles.container}>
      <Header userPhoto={userPhoto} username={username} tableNumber={tableNumber} />
      <ScrollView>
      <Text style={styles.FoodTitle}>Doces</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        <Card product={product} />
        </View>

      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff',
    flexDirection: "column",
    justifyContent: "space-between",
  },

  FoodTitle: {
    fontSize: 40,
    padding: 10,
    marginTop: 5,
  },
});

export default DoceScreen;
