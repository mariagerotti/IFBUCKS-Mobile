import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Cart from '../Cart';

export default function Profile({ navigation }) {
  const handleFavoritesPress = () => {
    navigation.navigate('Favorites');
  };

  const handleCartPress = () => {
    navigation.navigate('Cart');
  };

  const handleEditProfilePress = () => {
    navigation.navigate('EditProfile');
  };

  const handleFeedbackPress = () => {
    navigation.navigate('Feedback');
  };

  const handleLogoutPress = () => {
    // Em Breve...
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/ifbuckslogo.png')}
        style={styles.profilePicture}
      />
      <Text style={styles.name}>Eduardo da Silva</Text>
      <TouchableOpacity style={styles.section} onPress={handleFavoritesPress}>
        <View style={styles.sectionContent}>
          <Icon name="heart" size={30} color="#333" style={styles.icon} />
          <Text style={styles.sectionTitle}>Meus Favoritos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={handleCartPress}>
        <View style={styles.sectionContent}>
          <Icon name="shopping-cart" size={30} color="#333" style={styles.icon} />
          <Text style={styles.sectionTitle}>Meu Carrinho</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={handleEditProfilePress}>
        <View style={styles.sectionContent}>
          <Icon name="vcard" size={30} color="#333" style={styles.icon} />
          <Text style={styles.sectionTitle}>Editar Meu Perfil</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.section} onPress={handleFeedbackPress}>
        <View style={styles.sectionContent}>
          <Icon name="bullhorn" size={30} color="#333" style={styles.icon} />
          <Text style={styles.sectionTitle}>Feedback</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, 
  },
  icon: {
    marginRight: 10, 
  },
  logoutButton: {
    marginTop: 70,
    backgroundColor: '#004c03',
    padding: 10,
    borderRadius: 8,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});