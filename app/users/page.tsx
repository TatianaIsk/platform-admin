'use client';
import { useState, useEffect } from 'react';

import Header from '@/components/features/Header';
import Sidebar from '@/components/features/Sidebar';

import { User } from './types';
import { fetchUsers } from './actions/fetchUsers';

import s from './UsersPage.module.scss';
import Title from '@/components/ui/Title';
import Search from '@/components/features/Search';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };

    fetchUserData();
  }, []);

  return (
    <div className={s.container}>
      <Header />
      <div className={s.content}>
        <Sidebar />
        <div className={s.userContent}>
          <div className={s.title}>
            <Title title='Пользователи' />
						<Search onChange={() => {}} placeholder='Поиск'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
