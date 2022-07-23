import { colors } from '@theme/colors';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%;
  background-color: ${colors.background};
  align-self: center;
  padding: 24px;
`;

export const Question = styled.Text<{ highlight?: boolean }>`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: ${({ highlight }) => (highlight ? 'bold' : '400')};
`;
