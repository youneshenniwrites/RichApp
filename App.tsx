import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Provider as Redux } from 'react-redux';

import { store } from './src/store';
import { RootNavigator } from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Redux store={store}>
        <RootNavigator />
      </Redux>
    </>
  );
};

export default App;
