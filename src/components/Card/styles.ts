import { colors } from '@theme/colors';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  border: 3px solid ${colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.primary};
`;
