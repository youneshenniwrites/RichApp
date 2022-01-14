import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { FoodScreen, PackagesScreen } from './screens';
import {
  NPM_SCREEN_NAME,
  FOOD_SCREEN_NAME,
  ICON_ROUTE_ONE,
  ICON_ROUTE_TWO,
  COLOR_ACTIVE_ROUTE,
  COLOR_INACTIVE_ROUTE,
} from '../constants';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  const { Navigator, Screen } = Tab;
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: any;
            if (route.name === NPM_SCREEN_NAME) {
              iconName = ICON_ROUTE_ONE;
            } else if (route.name === FOOD_SCREEN_NAME) {
              iconName = ICON_ROUTE_TWO;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLOR_ACTIVE_ROUTE,
          tabBarInactiveTintColor: COLOR_INACTIVE_ROUTE,
          headerShown: false,
        })}
      >
        <Screen name={NPM_SCREEN_NAME} component={PackagesScreen} />
        <Screen name={FOOD_SCREEN_NAME} component={FoodScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
