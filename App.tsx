import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/store';

import ResultsList from './src/components/ResultsList';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>Search for a library</Text>
        <ResultsList />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff72',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
