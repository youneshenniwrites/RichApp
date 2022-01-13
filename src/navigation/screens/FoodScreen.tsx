import React, { useState } from 'react';
import { FlatList as FoodList } from 'react-native';

import uuid from 'react-native-uuid';
import { Chip } from 'react-native-paper';

import { MenuItem } from '../../components';
import { Container, Padder, Stretcher, Title } from '../../styles';
import { menuData as menu } from '../../mock';
import { FOOD_SCREEN_TITLE } from '../../constants';

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
          <Chip onPress={() => filterFoodByType('Pizza')}>Pizza</Chip>
          <Chip onPress={() => filterFoodByType('Burger')}>Burger</Chip>
          <Chip onPress={() => filterFoodByType('Soup')}>Soup</Chip>
          <Chip onPress={() => filterFoodByType('Sandwich')}>Sandwich</Chip>
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
