import React from 'react';
import { FlatList as FoodList } from 'react-native';

import uuid from 'react-native-uuid';
import { Chip } from 'react-native-paper';

import { MenuItem } from '../../components';
import { Container, Padder, Stretcher, Title } from '../../styles';
import { menuData as menu } from '../../mock';
import { FOOD_SCREEN_TITLE } from '../../constants';

export const FoodScreen = () => {
  // TODO Add filter component [pizza, burger, soup, sandwich]

  const filterFood = () => {};

  return (
    <Container>
      <Padder>
        <Title>{FOOD_SCREEN_TITLE}</Title>
      </Padder>
      <Padder theme={'small'}>
        <Stretcher theme={'horizontal'}>
          <Chip onPress={filterFood}>Pizza</Chip>
          <Chip>Burger</Chip>
          <Chip>Soup</Chip>
          <Chip>Sandwich</Chip>
        </Stretcher>
      </Padder>
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
