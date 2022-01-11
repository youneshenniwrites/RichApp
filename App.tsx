import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';

import { store } from './src/store';
import { Container, Title } from './src/styles';
import { ResultsList } from './src/components';

const App = () => {
  return (
    <Container>
      <Provider store={store}>
        <StatusBar style="auto" />
        <Title>NPM Package Finder</Title>
        <ResultsList />
      </Provider>
    </Container>
  );
};

export default App;
