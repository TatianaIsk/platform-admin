'use client';
import { useRouter } from 'next/navigation';
import { FormProvider, useForm } from 'react-hook-form';

import { validationSchema } from './validation';
import { yupResolver } from '@hookform/resolvers/yup';

import { links } from './data/Links';
import { User } from '../types/User';
import { InitialState } from './utils/InitialState';
import { createUser } from './actions/createUser';

import LinkBlock from '@/components/features/LinkBlock';
import Title from '@/components/ui/Title';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

import s from './CreateUser.module.scss';

const CreateUser = () => {
  const router = useRouter();

  const form = useForm<User>({
    defaultValues: InitialState,
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit((data: User) => {
    createUser(data);
    router.push('/users');
  });

  return (
    <FormProvider {...form}>
      <form className={s.container} onSubmit={onSubmit}>
        <LinkBlock previousPageUrl='/users' links={links} />
        <Title title='создать пользователя' className={s.title} />
        <div className={s.inputBlock}>
          <Input label='ФИО' name='name' classNames={{ input: errors.name && s.inputError }} />
          <Input label='Никнейм (eng)' name='username' />
        </div>
        <div className={s.inputBlock}>
          <Input label='e-mail' name='email' classNames={{ input: errors.email && s.inputError }} />
          <Input label='Телефон' name='phone' classNames={{ input: errors.phone && s.inputError }} />
        </div>
        <h3 className={s.subtitle}>Адрес</h3>
        <div className={s.inputBlock}>
          <Input label='Индекс' name='zipcode' />
          <Input label='Город' name='city' />
        </div>
        <Input label='Улица' classNames={{ inputBlock: s.input }} name='street' />
        <h3 className={s.subtitle}>Компания</h3>
        <div className={s.inputBlock}>
          <Input label='Название' name='companyName' />
          <Input label='Описание' name='catchPhrase' />
        </div>
        <Button className={s.btn} type='submit'>
          Создать {'>>>'}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateUser;
