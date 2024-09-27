import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";

const PhotoCard = ({ product, addCarrinho }) => {
  const [quantity, setQuantity] = useState(0);

  const add = () => setQuantity(quantity + 1);
  const remove = () => setQuantity(quantity - 1);

  function handleAddPress() {
    addCarrinho({
      produto: product.id,
      quantidade: quantity,
    });
  }

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.imagem }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.productName}>{product.nome}</Text>
        <Text style={styles.price}>R$ {product.preco}</Text>
      </View>
      <Text style={styles.desc}>{product.descricao}</Text>
      <Text style={styles.desc}>qtd.:{quantity}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          style={styles.adicionar}
          onPress={remove}
          disabled={quantity === 0}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.adicionar} onPress={add}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.adicionar} onPress={handleAddPress}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    //borderWidth: 1,
    //borderColor: "#ddd",
    //borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    width: "40%",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    //borderTopRightRadius: 10,
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
    padding: 8,
    borderRadius: 10,
    borderColor: "#ddd",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: 12,
    textAlign: "left",
    paddingLeft: 10,
  },
});

export default PhotoCard;
