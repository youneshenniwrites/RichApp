import React from 'react';

import { Footnote, Header, Label } from '../styles';
import { Canvas } from '../styles/Canvas';

interface Food {
  id: number;
  name: string;
  type: string;
  description: string;
  price: number;
}

interface Props {
  menuItem: Food;
}

// TODO use Card from paper for styling
export const FoodList = ({ menuItem }: Props) => {
  return (
    <>
      <Canvas>
        <Header>{menuItem.name}</Header>
        <Label>{menuItem.type}</Label>
      </Canvas>
      <Label>{menuItem.description}</Label>
      <Footnote>{menuItem.price}</Footnote>
    </>
  );
};
