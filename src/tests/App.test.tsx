import React from 'react';

import { Provider as Redux } from 'react-redux';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import { store } from '../store';
import { ResultsList } from '../components';

const RenderedComponent = (
  <Redux store={store}>
    <ResultsList />
  </Redux>
);

//* 1 - Test for expected display on first render

describe('Testing all components in < ResultsList /> render correctly', () => {
  it('Should render a search bar with a placeholder "Search a package"', () => {
    const { getByPlaceholderText } = render(RenderedComponent);

    getByPlaceholderText(/search a package/i);
  });

  it('Should render a button with the text "FIND PACKAGES"', () => {
    const { getByText } = render(RenderedComponent);

    getByText(/find packages/i);
  });
});

//* 2 - Test for expected behaviour during interaction: mock api call

// TODO fix the false positive

describe('Testing for the expected behaviour in < ResultsList />', () => {
  it('Should render a list of 20 items after typing a package and pressing the button', () => {
    const { getByPlaceholderText, getByRole, getByText } =
      render(RenderedComponent);
    const textInput = getByPlaceholderText(/search a package/i);
    const button = getByText(/find packages/i);
    const createdItemText = 'python';
    fireEvent.changeText(textInput, createdItemText);
    fireEvent.press(button);
  });
  it('Should fire a click event when button is pressed', () => {
    const { findByRole } = render(RenderedComponent);
    findByRole('button');
  });
});
