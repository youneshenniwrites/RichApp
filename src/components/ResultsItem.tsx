import React from 'react';
import { View } from 'react-native';

import { Divider, Label } from '../styles';

interface Props {
  item: string;
  index: number;
}

export const ResultsItem = ({ item, index }: Props): JSX.Element => {
  return (
    <View testID={`post-row-${index}`}>
      <Label>{item}</Label>
      <Divider />
    </View>
  );
};
