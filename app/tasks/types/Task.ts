import { FieldValues } from 'react-hook-form';
export interface Task extends FieldValues {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
