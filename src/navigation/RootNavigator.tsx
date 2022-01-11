import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { FoobarScreen, PackagesScreen } from './screens';
import {
  FOO_SCREEN_NAME,
  SEARCH_SCREEN_NAME,
  ICON_NAME_ONE,
  ICON_NAME_TWO,
} from '../constants';

const Tab = createBottomTabNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: any;
            if (route.name === SEARCH_SCREEN_NAME) {
              iconName = ICON_NAME_ONE;
            } else if (route.name === FOO_SCREEN_NAME) {
              iconName = ICON_NAME_TWO;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name={SEARCH_SCREEN_NAME} component={PackagesScreen} />
        <Tab.Screen name={FOO_SCREEN_NAME} component={FoobarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
