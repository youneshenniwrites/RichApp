import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';

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
      />
      <Button title="Search" onPress={handleSubmit} color={'white'} />
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
