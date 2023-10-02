import { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Home/Header";
import Card from "../../components/Home/Card";

const SalgadoScreen = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [carrinhoTemp, setCarrinhoTemp] = useState([]);

  async function postPedido(item) {
    try {
      const response = await axios.post("http://localhost:8000/pedidos/", {
        ...item,
        carrinho: 1,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function addCarrinho(item) {
    setCarrinhoTemp([...carrinhoTemp, item]);
    postPedido(item);
  }

  async function getData() {
    try {
      const response = await axios.get(
        "http://localhost:8000/categorias/salgados/produtos/?format=json"
      );

      const data = response.data;
      setProdutos(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    console.log(produtos);
  }, []);

  const userPhoto = "https://avatars.githubusercontent.com/u/48130339?v=4";
  const username = "Eduardo da Silva";
  const tableNumber = 5;

  return (
    <View style={styles.container}>
      <Header
        userPhoto={userPhoto}
        username={username}
        tableNumber={tableNumber}
      />
      <ScrollView>
        <Text style={styles.FoodTitle}>Salgados</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent:
              loading || produtos.length === 0 ? "center" : "space-between",
          }}
        >
          {loading ? (
            <Text>Carregando...</Text>
          ) : (
            produtos.map((produto) => (
              <Card product={produto} addCarrinho={addCarrinho} />
            ))
          )}
          {produtos.length === 0 && <Text>Sem Produtos por enquanto.</Text>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  FoodTitle: {
    fontSize: 40,
    padding: 10,
    marginTop: 5,
  },
});

export default SalgadoScreen;
