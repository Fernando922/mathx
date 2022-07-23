import { colors } from '@theme/colors';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  margin-bottom: 48px;
  color: ${colors.primary};
`;

export const CardsContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
