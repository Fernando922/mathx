import { colors } from '@theme/colors';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  padding: 16px;
  border-radius: 8px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.background};
`;
