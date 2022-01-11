import React from 'react';

import { ResultsList } from '../../components';
import { RESULTS_LIST_TITLE } from '../../constants';
import { Container, Title } from '../../styles';

export const PackagesScreen = () => {
  return (
    <Container>
      <Title>{RESULTS_LIST_TITLE}</Title>
      <ResultsList />
    </Container>
  );
};
