import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Provider as Redux } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { store } from './src/store';
import { FoobarScreen, PackagesScreen } from './src/screens';
import { FOO_SCREEN_NAME, SEARCH_SCREEN_NAME } from './src/constants';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Redux store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={SEARCH_SCREEN_NAME} component={PackagesScreen} />
            <Tab.Screen name={FOO_SCREEN_NAME} component={FoobarScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </Redux>
    </>
  );
};

export default App;
