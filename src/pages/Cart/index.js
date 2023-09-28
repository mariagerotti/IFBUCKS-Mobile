import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Chá', price: 3.00, image: 'https://abrir.link/JOsSP' },
    { id: 2, name: 'Torta', price: 10, image: 'https://abrir.link/XIbcV' },
    { id: 3, name: 'Coxinha', price: 4.50, image: 'https://abrir.link/oy6O9' },
  ]);

  const [itemQuantities, setItemQuantities] = useState({});

  const addToCart = (item) => {
    const updatedQuantities = { ...itemQuantities };
    updatedQuantities[item.id] = (updatedQuantities[item.id] || 0) + 1;
    setItemQuantities(updatedQuantities);
  };

  const removeFromCart = (item) => {
    const updatedQuantities = { ...itemQuantities };
    if (updatedQuantities[item.id] > 0) {
      updatedQuantities[item.id] -= 1;
      setItemQuantities(updatedQuantities);
    }
  };

  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      total += (itemQuantities[item.id] || 0) * item.price;
    }
    return total.toFixed(2);
  };

  const renderItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.quantityButtons}>
        <TouchableOpacity
          onPress={() => removeFromCart(item)}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{itemQuantities[item.id] || 0}</Text>
        <TouchableOpacity
          onPress={() => addToCart(item)}
          style={styles.quantityButton}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Carrinho de Compras</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={{ backgroundColor:'#8fb090', paddingBottom: 20, borderTopRightRadius:30,  borderTopLeftRadius:30, }}>
        <Text style={styles.totalText}>Total: R$ {calculateTotal()}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => checkout()}>
        <Text>Finalizar Compra</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 20,
    textAlign: 'center',
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
    backgroundColor:'#ebebeb',
    marginLeft: 20,
    marginRight: 20,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 16,
    color: '#8fb090',
    fontWeight: 'bold',
  },
  quantityButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#8fb090',
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#607660',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    margin: 10,
  },
});

export default CartScreen;
