import React from 'react';

import { render } from '@testing-library/react-native';
import { Provider as Redux } from 'react-redux';

import { store } from '../store';
import { ResultsList } from '../components';

// TODO: fix the <App /> bug

describe('Testing <ResultsList />', () => {
  it('renders the component correctly', () => {
    render(
      <Redux store={store}>
        <ResultsList />
      </Redux>
    );
  });
});
