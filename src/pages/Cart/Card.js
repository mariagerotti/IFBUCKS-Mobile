import { useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

export default function Card({ id, quantidade }) {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  async function getItem(id) {
    try {
      const response = await axios.get(`https://ifbucks.1.ie-1.fl0.io/produtos/${id}/`);
      const data = response.data;
      setItem(data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getItem(id);
    console.log(id);
    console.log(item);
  }, []);

  return (
    !loading && (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.imagem }} style={styles.productImage} />
        <View>
          <Text style={styles.productName}>{item.nome}</Text>
          <Text style={styles.productName}>{quantidade}</Text>
          <Text style={styles.productPrice}>R$ {item.preco}</Text>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff'
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center'
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ebebeb',
    padding: 20,
    backgroundColor: '#ebebeb',
    marginLeft: 20,
    marginRight: 20
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginBottom: 10
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  productPrice: {
    fontSize: 16,
    color: '#8fb090',
    fontWeight: 'bold'
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  quantityButton: {
    backgroundColor: '#8fb090',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center'
  },
  checkoutButton: {
    backgroundColor: '#607660',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10
  }
});
