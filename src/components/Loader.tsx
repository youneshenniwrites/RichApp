import React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

export const Loader = (): JSX.Element => {
  return (
    <ActivityIndicator animating={true} color={Colors.red800} size={'large'} />
  );
};
