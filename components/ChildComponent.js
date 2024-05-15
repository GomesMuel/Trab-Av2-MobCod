import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const ChildComponent = ({ number, message, onNumberChange, onMessageChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onNumberChange}
        value={number}
        placeholder="Número (Ex: 5588999991234)"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={onMessageChange}
        value={message}
        placeholder="Mensagem"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default ChildComponent;
