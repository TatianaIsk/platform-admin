'use client';
import { useState, useEffect } from 'react';

import { User } from '../../types/User';
import { Column } from '../../types/Columns';
import { fetchUsers } from '../../actions/fetchUsers';

import Loading from '@/components/features/Loading';
import Table from '@/components/ui/Table';
import Button from '@/components/ui/Button';

import s from './PageContent.module.scss';

const columnTitles: Column[] = [
  { title: 'ID', key: 'id' },
  { title: 'Имя', key: 'name' },
  { title: 'Никнейм (eng)', key: 'nickname' },
  { title: 'e-mail', key: 'email' },
  { title: 'адрес', key: 'address' },
  { title: 'компания', key: 'company' },
];

const PageContent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
      setIsLoading(false);
    };

    fetchUserData();
  }, []);

  const columns = columnTitles.map(col => (
    <div key={col.key} className={s.column}>
      {col.title} <Button className={s.theadBtn} />
    </div>
  ));
  const data = users.map(user => [user.id, user.name, user.username, user.email, user.address.city + ' ' + user.address.street + ' ' + user.address.zipcode, user.company.name]);

  return <>{isLoading ? <Loading /> : <Table columns={columns} data={data} />}</>;
};
export default PageContent;
