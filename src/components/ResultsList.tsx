import React, { useState } from 'react';
import { View } from 'react-native';

import { Searchbar, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';

import { RooState, searchLibraries } from '../store';
import { Center, Divider, Label, Padder } from '../styles';
import Loader from './Loader';

// TODO: make keyboard appear

const ResultsList = (): JSX.Element => {
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
          placeholder="Search a package"
          onChangeText={setTerm}
          value={term}
          autoCapitalize="none"
          autoComplete={false}
          autoCorrect={false}
        />
      </Padder>
      <Padder>
        <Button mode="contained" onPress={handleSubmit}>
          Search
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

export default ResultsList;
