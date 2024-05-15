import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParentComponent from './components/ParentComponent';

const App = () => {
  return (
    <View style={styles.container}>
      <ParentComponent />
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

export default App;