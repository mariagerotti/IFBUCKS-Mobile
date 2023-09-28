import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const PhotoCard = ({ product }) => {
  const [add, setAdd] = useState(0);

  const handleAddPress = () => {
    setAdd(add + 1);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.imageProduct }} style={styles.image} resizeMode="cover" />
      <View style={styles.details}>
        <Text style={styles.productName}>{product.nome}</Text>
        <Text style={styles.price}>R$ {product.preco.toFixed(2)}</Text>
      </View>
      <Text style={styles.desc}>{product.descricao}</Text>
      <TouchableOpacity style={styles.adicionar} onPress={handleAddPress}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    width: "40%", 
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "#8fb090",
    fontWeight: "bold",
  },
  adicionar: {
    backgroundColor: "#8fb090",
    padding: 10,
    borderRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: 12,
    textAlign: "center",
    padding: 5,
  },
});

export default PhotoCard;