import React from 'react';

import { Provider as Redux } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';

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

  //* 2 - Testing for expected search behaviour and API response

  it('Renders one package with the name "java" in it', async () => {
    const { getByPlaceholderText, findAllByText, getByText } =
      render(component);

    const textInput = getByPlaceholderText(/search a package/i);
    const searchButton = getByText(/find packages/i);
    const inputText = 'java';

    fireEvent.changeText(textInput, inputText);
    fireEvent.press(searchButton);

    const items = await findAllByText(inputText);
    expect(items).toHaveLength(1);
  });

  it('Renders several packages with the name "python" in them', async () => {
    const { getByPlaceholderText, findAllByText, getByText } =
      render(component);

    const textInput = getByPlaceholderText(/search a package/i);
    const searchButton = getByText(/find packages/i);
    const inputText = 'python';

    fireEvent.changeText(textInput, inputText);
    fireEvent.press(searchButton);

    const items = await findAllByText(/python/i, { exact: false });
    expect(items).toHaveLength(5);
  });
});
