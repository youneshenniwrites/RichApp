import React from 'react';

import { Provider as Redux } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
// import '@testing-library/jest-native/extend-expect';

import { store } from '../store';
import { ResultsList } from '../components';
import { PackagesScreen } from '../navigation/screens';

describe('Testing the <PackagesScreen /> component', () => {
  const component = (
    <Redux store={store}>
      <PackagesScreen />
    </Redux>
  );

  it('Renders a header with the text "NPM Package Finder"', () => {
    const { getByText } = render(component);
    getByText(/npm package finder/i);
  });
});

describe('Testing the <ResultsList /> component', () => {
  const component = (
    <Redux store={store}>
      <ResultsList />
    </Redux>
  );

  //* 1 - Testing that components in <ResultsList /> render correctly

  it('Renders a search bar with a placeholder "Search a package"', () => {
    const { getByPlaceholderText } = render(component);

    getByPlaceholderText(/search a package/i);
  });

  it('Renders a button with the text "FIND PACKAGES"', () => {
    const { getByText } = render(component);

    getByText(/find packages/i);
  });

  // TODO: we stopped here!!!

  //* 2 - Test for expected behaviour during API call

  it('Renders 20 items after typing a package name and pressing the search button', () => {
    const { getByPlaceholderText, getAllByRole, getByText } = render(component);

    const textInput = getByPlaceholderText(/search a package/i);
    const searchButton = getByText(/find packages/i);
    const createdItemText = 'python';

    fireEvent.changeText(textInput, createdItemText);
    fireEvent.press(searchButton);
  });
});
