import { QuestionType } from '@screens/ExerciseList/types';

export type Props = {
  questions: QuestionType[];
  onPress: () => void;
  operationType: OperationType;
};
