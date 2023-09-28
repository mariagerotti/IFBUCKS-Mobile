import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Input = ({ iconName, placeholder, onChangeText, value }) => {
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={24} color="#333" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 5,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default Input;
