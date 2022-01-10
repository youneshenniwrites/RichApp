import React, { useState } from 'react';
import { Text, TextInput, Button, StyleSheet } from 'react-native';

import { v4 as uuidv4 } from 'uuid';

import { useDispatch, useSelector } from 'react-redux';
import { RooState, searchLibraries } from '../store';

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
      <TextInput
        style={styles.textInputStyle}
        onChangeText={setTerm}
        value={term}
        placeholder="Search a library"
        autoCapitalize="none"
      />
      <Button title="Search" onPress={handleSubmit} color={'white'} />
      {error && <Text>{error}</Text>}
      {loading && <Text>Loading ...</Text>}
      {!error &&
        !loading &&
        data.map((name) => <Text key={uuidv4()}>{name}</Text>)}
    </>
  );
};

export default ResultsList;

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: '#fff',
    height: 50,
    width: 200,
    margin: 30,
    paddingLeft: 10,
  },
});
