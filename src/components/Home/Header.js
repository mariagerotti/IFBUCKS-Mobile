import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";

const Header = ({ userPhoto, username, tableNumber }) => {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await axios.get("https://ifbucks.1.ie-1.fl0.io/usuarios/1/");
      const data = response.data;
      setUser(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    console.log(user);
  }, []);

  const toggleSearchBar = () => {
    setSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderBottomRightRadius: 50,
          backgroundColor: "#1e1e1e",
          paddingTop: 30,
          paddingRight: 90,
          paddingLeft: 10,
          paddingBottom: 10,
        }}
      >
        <View style={styles.userInfo}>
          <Image source={{ uri: user.imagem }} style={styles.userPhoto} />
          <View>
            <Text style={styles.username}>{user.nome}</Text>
            <Text style={styles.tableNumber}>Mesa {tableNumber}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={toggleSearchBar}>
        <Feather name="search" size={24} color="#333" style={styles.icon} />
      </TouchableOpacity>
      {isSearchBarVisible && (
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ffff",
    paddingRight: 10,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  tableNumber: {
    fontSize: 14,
    color: "#888",
  },
  icon: {
    marginRight: 8,
    marginLeft: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
  },
  input: {
    flex: 1,
    height: 20,
    color: "#333",
  },
});

export default Header;
