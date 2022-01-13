import React, { useState } from 'react';
import { FlatList as FoodList } from 'react-native';

import uuid from 'react-native-uuid';
import { Chip } from 'react-native-paper';

import { MenuItem } from '../../components';
import { Container, Padder, Stretcher, Title } from '../../styles';
import { menuData as menu } from '../../mock';
import {
  BURGER_BUTTON_TEXT,
  FOOD_SCREEN_TITLE,
  PIZZA_BUTTON_TEXT,
  SANDWICH_BUTTON_TEXT,
  SOUP_BUTTON_TEXT,
} from '../../constants';

export const FoodScreen = () => {
  const [foodList, setFoodList] = useState(menu);

  const filterFoodByType = (foodType: string): void => {
    const food = foodType.length
      ? menu.filter((item) => item.type === foodType)
      : menu;
    setFoodList(food);
  };

  return (
    <Container>
      <Padder>
        <Title>{FOOD_SCREEN_TITLE}</Title>
      </Padder>
      <Padder theme={'small'}>
        <Stretcher theme={'horizontal'}>
          <Chip onPress={() => filterFoodByType('')}>All</Chip>
          <Chip onPress={() => filterFoodByType(PIZZA_BUTTON_TEXT)}>
            {PIZZA_BUTTON_TEXT}
          </Chip>
          <Chip onPress={() => filterFoodByType(BURGER_BUTTON_TEXT)}>
            {BURGER_BUTTON_TEXT}
          </Chip>
          <Chip onPress={() => filterFoodByType(SOUP_BUTTON_TEXT)}>
            {SOUP_BUTTON_TEXT}
          </Chip>
          <Chip onPress={() => filterFoodByType(SANDWICH_BUTTON_TEXT)}>
            {SANDWICH_BUTTON_TEXT}
          </Chip>
        </Stretcher>
      </Padder>
      <FoodList
        data={foodList}
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
