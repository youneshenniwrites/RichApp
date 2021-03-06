import React, { useState } from 'react';
import { FlatList as NPMPackagesList } from 'react-native';

import { Searchbar, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-native-uuid';

import { Loader } from './Loader';
import { RooState, searchLibraries } from '../store';
import { Centerer, Container, Label, Padder } from '../styles';
import { SEARCH_BUTTON_TEXT, NPM_SEARCH_PLACEHOLDER } from '../constants';
import { ResultsItem } from './ResultsItem';

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
      <Centerer>
        {error && <Label>{error}</Label>}
        {loading && <Loader />}
      </Centerer>
      {!error && !loading && (
        <NPMPackagesList
          data={data}
          keyExtractor={() => uuid.v4().toString()}
          contentContainerStyle={{ alignItems: 'center' }}
          renderItem={({ item, index }) => (
            <ResultsItem item={item} index={index} />
          )}
        />
      )}
    </Container>
  );
};
