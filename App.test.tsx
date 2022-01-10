import React from 'react';
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { store } from './src/store';
import ResultsList from './src/components/ResultsList';

describe('Testing RichApp', () => {
  it('renders the component correctly', () => {
    render(
      <Provider store={store}>
        <ResultsList />
      </Provider>
    );
  });
});
