'use client'
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from './validation';

import { useRouter } from 'next/navigation';
import { Task } from '../types/Task';
import { InitialState } from '../utils/initialState';
import { createTask } from '../actions/createTask';

import s from './CreateTask.module.scss';

const CreateTask = () => {
  const router = useRouter();

  const form = useForm<Task>({
    defaultValues: InitialState,
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit((data: Task) => {
    createTask(data);
    router.push('/tasks');
  });

  return (
    <FormProvider {...form}>
      <form className={s.container} onSubmit={onSubmit}>
        <div>
          
        </div>
      </form>
    </FormProvider>
  );
};

export default CreateTask;
