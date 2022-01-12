import React from 'react';

import { FoodList } from '../../components';
import { Container, Title } from '../../styles';
import { menu } from '../../utils';

export const FoodScreen = () => {
  // TODO add scroll view
  return (
    <Container>
      <Title>Welcome to FakeFood</Title>
      {menu.map((menuItem) => (
        <FoodList key={menuItem.id} menuItem={menuItem} />
      ))}
    </Container>
  );
};
