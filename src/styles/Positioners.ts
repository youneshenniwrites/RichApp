import styled from 'styled-components/native';

export const Centerer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Stretcher = styled.View`
  flex-direction: ${({ theme }) => (theme === 'horizontal' ? 'row' : 'column')};
  justify-content: space-between;
`;

export const Righter = styled.View`
  justify-content: flex-end;
`;
