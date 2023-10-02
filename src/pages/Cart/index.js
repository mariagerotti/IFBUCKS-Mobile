import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import Card from "./Card";

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [precoTotal, setPrecoTotal] = useState(0);

  useEffect(() => {
    getCartItems();
  }, []);

  async function getCartItems() {
    try {
      const response = await axios.get(
        "http://localhost:8000/mesas/1/pedidos/"
      );
      const data = response.data;
      setCartItems(data);
      calculateTotal(data);
    } catch (error) {
      console.log(error);
    }
  }

  const calculateTotal = (data) => {
    let total = 0;
    data.forEach((item) => {
      total += item.preco;
    });
    setPrecoTotal(total.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Carrinho de Compras</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <Card id={item.produto} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View
        style={{
          backgroundColor: "#8fb090",
          paddingBottom: 20,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Text style={styles.totalText}>Total: R$ {precoTotal}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => checkout()}
        >
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
    backgroundColor: "#fff",
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 20,
    textAlign: "center",
  },
  totalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
  },
  checkoutButton: {
    backgroundColor: "#607660",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    margin: 10,
  },
});

export default CartScreen;
