'use client';
import { useState, useEffect } from 'react';

import { fetchUsers } from './actions/fetchUsers';
import { User } from './types/User';
import { columnTitles } from './data/Columns';

import Title from '@/components/ui/Title';
import Search from '@/components/features/Search';
import Button from '@/components/ui/Button';
import Loading from '@/components/features/Loading';
import Table from '@/components/ui/Table';

import s from './UsersPage.module.scss';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const columns = columnTitles.map((col, index) => (
    <div key={col.key} className={s.column}>
      {index === 0 ? col.title : col.title + ' '}
      {index === 0 ? null : <Button className={s.theadBtn} />}
    </div>
  ));
  const data = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(user => [
      <Button key={user.id} className={s.btn} />,
      user.id,
      user.name,
      user.username,
      user.email,
      user.address.city + ' ' + user.address.street + ' ' + user.address.zipcode,
      user.company.name,
    ]);

  return (
    <div className={s.userContent}>
      <div className={s.title}>
        <Title title='Пользователи' />
        <Search value={searchTerm} onChange={handleSearchChange} placeholder='Поиск' />
      </div>
      {isLoading ? <Loading /> : <Table columns={columns} data={data} />}
    </div>
  );
};

export default UsersPage;
