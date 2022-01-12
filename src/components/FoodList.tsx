import React from 'react';

import { Button, Card, Paragraph } from 'react-native-paper';

import { Padder } from '../styles';
import { addBritishPound } from '../utils';

interface Food {
  id: number;
  name: string;
  type: string;
  description: string;
  picture: string;
  price: number;
}
interface Props {
  menuItem: Food;
}
// TODO: add proper food images

export const FoodList = ({ menuItem }: Props) => {
  return (
    <Padder>
      <Card>
        <Card.Title title={menuItem.name} subtitle={menuItem.type} />
        <Card.Content>
          <Paragraph>{menuItem.description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: menuItem.picture }} />
        <Card.Actions>
          <Button>{addBritishPound(menuItem.price)}</Button>
        </Card.Actions>
      </Card>
    </Padder>
  );
};
