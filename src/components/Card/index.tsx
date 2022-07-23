import { Props } from '@components/MainButton/types';
import React from 'react';
import { Container, Title } from './styles';

const Card = ({ title, onPress }: Props) => {
  return (
    <Container onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Card;
