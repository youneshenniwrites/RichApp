import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
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
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName: any;
                if (route.name === SEARCH_SCREEN_NAME) {
                  iconName = 'logo-dropbox';
                } else if (route.name === FOO_SCREEN_NAME) {
                  iconName = 'md-person-circle';
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
      </Redux>
    </>
  );
};

export default App;
