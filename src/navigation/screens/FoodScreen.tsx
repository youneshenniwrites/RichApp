import React from 'react';
import { FlatList as FoodList } from 'react-native';

import uuid from 'react-native-uuid';

import { MenuItem } from '../../components';
import { Container, Title } from '../../styles';
import { menuData as menu } from '../../mock';

export const FoodScreen = () => {
  // TODO Add filter

  return (
    <Container>
      <Title>Welcome to FakeFood</Title>
      <FoodList
        data={menu}
        keyExtractor={() => uuid.v4().toString()}
        renderItem={({ item }) => (
          <MenuItem
            id={item.id}
            name={item.name}
            description={item.description}
            type={item.type}
            picture={item.picture}
            price={item.price}
          />
        )}
      />
    </Container>
  );
};
