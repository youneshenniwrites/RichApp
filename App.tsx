import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import store from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hello Younes!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff72',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
