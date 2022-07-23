import MainButton from '@components/MainButton';
import { QuestionType } from '@screens/ExerciseList/types';
import React from 'react';

import Modal from 'react-native-modal';
import { Container, Question } from './styles';
import { Props } from './types';

const SolutionsModal = ({ questions, onPress, operationType }: Props) => {
  const returnQuestionSolution = (question: QuestionType) => {
    switch (operationType) {
      case 'ADD':
        return (question.firstNumber + question.secondNumber).toFixed(2);
      case 'SUB':
        return (question.firstNumber - question.secondNumber).toFixed(2);
      case 'DIV':
        return (question.firstNumber / question.secondNumber).toFixed(1);
      case 'MULT':
        return (question.firstNumber * question.secondNumber).toFixed(2);
    }
  };

  return (
    <Modal isVisible style={{ margin: 0 }}>
      <Container>
        {questions.map(question => (
          <Question key={question.index}>
            <Question highlight>{`${question.index}) `}</Question>
            {returnQuestionSolution(question)}
          </Question>
        ))}
        <MainButton
          title="sair"
          onPress={onPress}
          viewStyle={{ alignSelf: 'center' }}
        />
      </Container>
    </Modal>
  );
};

export default SolutionsModal;
