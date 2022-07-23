import styled from 'styled-components/native';

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  margin-bottom: 48px;
`;

export const Question = styled.Text<{ highlight?: boolean }>`
  font-size: 18px;
  margin-bottom: 32px;
  font-weight: ${({ highlight }) => (highlight ? 'bold' : '400')};
`;
