'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
  const [user, setUser] = useState<User>(InitialState);

  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setUser(prevUser => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleClick = () => {
    createUser(user);
    router.push('/users');
  };

  return (
    <div className={s.container}>
      <LinkBlock previousPageUrl='/users' links={links} />
      <Title title='создать пользователя' className={s.title} />
      <div className={s.inputBlock}>
        <Input label='ФИО' name='name' value={user.name} onChange={handleChange} />
        <Input label='Никнейм (eng)' name='username' value={user.username} onChange={handleChange} />
      </div>
      <div className={s.inputBlock}>
        <Input label='e-mail' name='email' value={user.email} onChange={handleChange} />
        <Input label='Телефон' name='phone' value={user.phone} onChange={handleChange} />
      </div>
      <h3 className={s.subtitle}>Адрес</h3>
      <div className={s.inputBlock}>
        <Input label='Индекс' name='zipcode' value={user.address.zipcode} onChange={handleChange} />
        <Input label='Город' name='city' value={user.address.city} onChange={handleChange} />
      </div>
      <Input label='Улица' classNames={{ inputBlock: s.input }} name='street' value={user.address.street} onChange={handleChange} />
      <h3 className={s.subtitle}>Компания</h3>
      <div className={s.inputBlock}>
        <Input label='Название' name='companyName' value={user.company.companyName} onChange={handleChange} />
        <Input label='Описание' name='catchPhrase' value={user.company.catchPhrase} onChange={handleChange} />
      </div>
      <Button className={s.btn} onClick={handleClick}>
        Создать {'>>>'}
      </Button>
    </div>
  );
};

export default CreateUser;
