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
    getTotal();
  }, []);

  async function getCartItems() {
    try {
      const response = await axios.get(
        "https://ifbucks.1.ie-1.fl0.io/mesas/1/pedidos/"
      );
      const data = response.data;
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getTotal() {
    try {
      const response = await axios.get("https://ifbucks.1.ie-1.fl0.io/carrinho/1/");
      const data = response.data;
      setPrecoTotal(data.total);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.cartTitle}>Carrinho de Compras</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <Card id={item.produto} quantidade={item.quantidade} />
        )}
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
