import React from 'react';

import { Button, Card, Paragraph } from 'react-native-paper';

import { Padder } from '../styles';
import { addBritishPound } from '../utils';

interface MenuItemProps {
  id: number;
  name: string;
  type: string;
  description: string;
  picture: string;
  price: number;
}

export const MenuItem = ({
  name,
  type,
  description,
  picture,
  price,
}: MenuItemProps) => {
  return (
    <Padder>
      <Card>
        <Card.Title title={name} subtitle={type} />
        <Card.Content>
          <Paragraph>{description}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: picture }} />
        <Card.Actions>
          <Button>{addBritishPound(price)}</Button>
        </Card.Actions>
      </Card>
    </Padder>
  );
};
