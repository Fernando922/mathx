import React, { useState, useEffect } from 'react';
import MainButton from '@components/MainButton';

import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { Title, Question, Scroll } from './styles';

import { QuestionType } from './types';
import MainContainer from '@components/MainContainer';
import { Params } from './types';
import SolutionsModal from '@components/SolutionsModal';
import { OperationSymbol, OperationType } from '@screens/Home/types';
import { Alert, BackHandler } from 'react-native';

function ExerciseList() {
  const {
    params: { operationType },
  } = useRoute<RouteProp<Params, 'ExerciseList'>>();

  const { goBack } = useNavigation();

  const [operator, setOperator] = useState<OperationSymbol>('+');
  const [isSolutionVisible, setIsSolutionVisible] = useState(false);
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const returnANumberLessThanTheGiven = (givenNumber: number): number => {
    let randomNumber = givenNumber;
    while (randomNumber >= givenNumber) {
      randomNumber = Number((Math.random() * 200).toFixed(2));
    }
    return randomNumber;
  };

  const generateRandomNumber = (firstNumber?: number): number => {
    if (firstNumber) {
      return returnANumberLessThanTheGiven(firstNumber);
    }
    return Number((Math.random() * 200).toFixed(2));
  };

  const generateOperations = (operationType: OperationType) => {
    const operationSymbols: { [key in OperationType]: OperationSymbol } = {
      ADD: '+',
      SUB: '-',
      MULT: '*',
      DIV: '/',
    };

    setOperator(operationSymbols[operationType]);
    const newQuestions = [];
    for (let i = 1; i <= 15; i++) {
      const firstNumber = generateRandomNumber();
      const secondNumber = generateRandomNumber(firstNumber);

      const newQuestion = {
        index: i,
        firstNumber,
        secondNumber,
      };
      newQuestions.push(newQuestion);
    }

    setQuestions(newQuestions);
  };

  useEffect(() => {
    generateOperations(operationType);
  }, [operationType]);

  const toggleSolutionsModal = () => {
    setIsSolutionVisible(!isSolutionVisible);
  };

  const handleGoBack = () => {
    Alert.alert('Finalizar', 'Deseja realmente voltar para a tela anterior?', [
      { text: 'Não' },
      { text: 'SIM', onPress: () => goBack() },
    ]);
    return true;
  };
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        handleGoBack();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <MainContainer>
      <Scroll>
        <Title>Resolva as operações</Title>
        {questions.map(question => (
          <Question key={question.index}>
            <Question highlight>{`${question.index}) `}</Question>
            {`${question.firstNumber} ${operator} ${question.secondNumber}`}
          </Question>
        ))}
        <MainButton title="Ver Solução" onPress={toggleSolutionsModal} />
      </Scroll>
      {isSolutionVisible && (
        <SolutionsModal
          questions={questions}
          onPress={toggleSolutionsModal}
          operationType={operationType}
        />
      )}
    </MainContainer>
  );
}

export default ExerciseList;
