import React, { useState } from 'react';
import { View, Button, StyleSheet, Linking } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (phoneNumber.startsWith('55') && phoneNumber.length >= 11) {
      const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
      Linking.openURL(url);
    } else {
      alert('Número inválido. Certifique-se de que começa com 55 e tem pelo menos 11 caracteres.');
    }
  };

  return (
    <View style={styles.container}>
      <ChildComponent
        number={phoneNumber}
        message={message}
        onNumberChange={setPhoneNumber}
        onMessageChange={setMessage}
      />
      <Button title="Enviar Mensagem" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default ParentComponent;
