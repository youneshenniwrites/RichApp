import React, { useState } from 'react';
import { View } from 'react-native';

import { Searchbar, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { RooState, searchLibraries } from '../store';
import { Center, Divider, Label, Padder } from '../styles';
import { Loader } from './Loader';
import { SEARCH_BUTTON_TEXT, SEARCH_PLACEHOLDER } from '../constants';

// TODO: turn list into a scroll view

export const ResultsList = (): JSX.Element => {
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  const { data, error, loading } = useSelector(
    (state: RooState) => state.searchResults
  );

  const handleSubmit = () => {
    return dispatch(searchLibraries(term));
  };

  return (
    <>
      <Padder>
        <Searchbar
          placeholder={SEARCH_PLACEHOLDER}
          onChangeText={setTerm}
          value={term}
          autoCapitalize="none"
          autoComplete={false}
          autoCorrect={false}
          onEndEditing={handleSubmit}
        />
      </Padder>
      <Padder>
        <Button mode="contained" onPress={handleSubmit}>
          {SEARCH_BUTTON_TEXT}
        </Button>
      </Padder>
      <Center>
        {error && <Label>{error}</Label>}
        {loading && <Loader />}
        {!error &&
          !loading &&
          data.map((name) => (
            <View key={name}>
              <Label>{name}</Label>
              <Divider />
            </View>
          ))}
      </Center>
    </>
  );
};
