import React from 'react';

import { FoodList } from '../../components';
import { Container, Title } from '../../styles';
import { menuData } from '../../mock';

export const FoodScreen = () => {
  // TODO add scroll view
  // TODO Add filter
  return (
    <Container>
      <Title>Welcome to FakeFood</Title>
      {menuData.map((menuItem) => (
        <FoodList key={menuItem.id} menuItem={menuItem} />
      ))}
    </Container>
  );
};
