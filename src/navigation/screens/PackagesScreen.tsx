import React from 'react';

import { ResultsList } from '../../components';
import { NPM_SCREEN_TITLE } from '../../constants';
import { Container, Padder, Title } from '../../styles';

export const PackagesScreen = () => {
  return (
    <Container>
      <Padder>
        <Title>{NPM_SCREEN_TITLE}</Title>
      </Padder>

      <ResultsList />
    </Container>
  );
};
