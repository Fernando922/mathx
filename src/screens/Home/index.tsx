import React, { useState, useEffect } from 'react';
import MainButton from '@components/MainButton';

import { CardsContainer, Title } from './styles';

import MainContainer from '@components/MainContainer';
import Card from '@components/Card';
import { OperationType } from './types';
import { useNavigation } from '@react-navigation/native';

function Home() {
  const { navigate } = useNavigation();

  const navigateToQuestions = (operationType: OperationType) => {
    navigate('ExerciseList', { operationType });
  };

  return (
    <MainContainer>
      <Title>Olá! O que quer praticar hoje?</Title>
      <CardsContainer>
        <Card title="Adição" onPress={() => navigateToQuestions('ADD')} />
        <Card title="Subtração" onPress={() => navigateToQuestions('SUB')} />
        <Card title="Divisão" onPress={() => navigateToQuestions('DIV')} />
        <Card
          title="Multiplicação"
          onPress={() => navigateToQuestions('MULT')}
        />
      </CardsContainer>
    </MainContainer>
  );
}

export default Home;
