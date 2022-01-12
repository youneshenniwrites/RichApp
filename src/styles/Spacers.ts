import styled from 'styled-components/native';

export const Padder = styled.View`
  padding: ${({ theme }) => (theme === 'small' ? 8 : 16)}px;
`;

export const Divider = styled.View`
  margin-bottom: 8px;
`;
