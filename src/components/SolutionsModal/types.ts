import { QuestionType } from '@screens/ExerciseList/types';
import { OperationType } from '@screens/Home/types';

export type Props = {
  questions: QuestionType[];
  onPress: () => void;
  operationType: OperationType;
};
