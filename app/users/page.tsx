'use client';
import { useState, useEffect } from 'react';

import Header from '@/components/features/Header';
import Sidebar from '@/components/features/Sidebar';

import { User } from './types';
import { fetchUsers } from './actions/fetchUsers';

import s from './UsersPage.module.scss';
import Title from '@/components/ui/Title';
import Search from '@/components/features/Search';
import Table from '@/components/ui/Table';
import Button from '@/components/ui/Button';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };

    fetchUserData();
  }, []);

  const columns = [
    <div key='id' className={s.column}>
      ID <Button className={s.theadBtn} />
    </div>,
    <div key='id' className={s.column}>
      Имя <Button className={s.theadBtn} />
    </div>,
    <div key='id' className={s.column}>
      Никнейм (eng) <Button className={s.theadBtn} />
    </div>,
    <div key='id' className={s.column}>
      e-mail <Button className={s.theadBtn} />
    </div>,
    <div key='id' className={s.column}>
      адрес <Button className={s.theadBtn} />
    </div>,
    <div key='id' className={s.column}>
      компания <Button className={s.theadBtn} />
    </div>,
  ];
  const data = users.map(user => [user.id, user.name, user.username, user.email, user.address.city + ' ' + user.address.street + ' ' + user.address.zipcode, user.company.name]);

  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}>
        <Sidebar />
        <div className={s.userContent}>
          <div className={s.title}>
            <Title title='Пользователи' />
            <Search onChange={() => {}} placeholder='Поиск' />
          </div>
          <Table columns={columns} data={data} />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
