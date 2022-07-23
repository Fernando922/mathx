import { OperationType } from '@screens/Home/types';

export type Params = {
  ExerciseList: {
    operationType: OperationType;
  };
};

export type QuestionType = {
  index: number;
  firstNumber: number;
  secondNumber: number;
};
