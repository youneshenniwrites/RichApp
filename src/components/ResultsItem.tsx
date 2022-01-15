import React from 'react';

import { Divider, Label } from '../styles';

interface Props {
  item: string;
  index: number;
}

export const ResultsItem = ({ item, index }: Props): JSX.Element => {
  return (
    <>
      <Label>{item}</Label>
      <Divider />
    </>
  );
};
