import React, {useState, useEffect} from 'react';

import {Container, Title, Question} from './styles';

import {OperationSymbol, OperationType, QuestionType} from './types';

const Home = () => {
  const [operator, setOperator] = useState<OperationSymbol>('+');
  const [questions, setQuestions] = useState<QuestionType[]>([]);

  const generateOperations = (operationType: OperationType) => {
    const operationSymbols: {[key in OperationType]: OperationSymbol} = {
      ADD: '+',
      SUB: '-',
      MULT: '*',
      DIV: '/',
    };

    setOperator(operationSymbols[operationType]);
    for (let i = 0; i < 14; i++) {
      const newQuestion: QuestionType = {firstNumber: 12, secondNumber: 12};

      setQuestions([...questions, newQuestion]);
    }
  };

  useEffect(() => {
    generateOperations('ADD');
  }, []);

  return (
    <Container>
      <Title>Resolva as operações</Title>
      {questions.map(question => (
        <Question>{`${question.firstNumber} ${operator} ${question.secondNumber}`}</Question>
      ))}
    </Container>
  );
};

export default Home;
