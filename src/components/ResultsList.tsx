import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Searchbar, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';

import { RooState, searchLibraries } from '../store';
import { Container, Divider, Label, Padder } from '../styles';
import { Loader } from './Loader';
import { SEARCH_BUTTON_TEXT, NPM_SEARCH_PLACEHOLDER } from '../constants';

export const ResultsList = (): JSX.Element => {
  const [term, setTerm] = useState('');

  const dispatch = useDispatch();

  const { data, error, loading } = useSelector(
    (state: RooState) => state.searchResults
  );

  const handleSubmit = () => {
    setTerm('');
    return term && dispatch(searchLibraries(term));
  };

  return (
    <Container>
      <Padder>
        <Searchbar
          placeholder={NPM_SEARCH_PLACEHOLDER}
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

      {error && <Label>{error}</Label>}
      {loading && <Loader />}
      {!error && !loading && (
        <FlatList
          data={data}
          keyExtractor={() => uuid.v4().toString()}
          contentContainerStyle={{ alignItems: 'center' }}
          renderItem={({ item }) => (
            <>
              <Label>{item}</Label>
              <Divider />
            </>
          )}
        />
      )}
    </Container>
  );
};
