import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ResultsList = (): JSX.Element => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={setTerm}
        value={term}
        placeholder="Search a library"
      />
      <Button title="Search" onPress={() => {}} color={'#fff'} />
    </View>
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
