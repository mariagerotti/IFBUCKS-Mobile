import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Home/Header'; 

const SalgadosScreen = () => {
  const userPhoto = 'https://avatars.githubusercontent.com/u/48130339?v=4';
  const username = 'Eduardo da Silva';
  const tableNumber = 5; 

  return (
    <View style={styles.container}>
      <Header userPhoto={userPhoto} username={username} tableNumber={tableNumber} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
});

export default SalgadosScreen;
