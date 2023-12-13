'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import { fetchUsers } from './actions/fetchUsers';
import { User } from './types/User';
import { columnTitles } from './data/Columns';

import Title from '@/components/ui/Title';
import Search from '@/components/features/Search';
import Button from '@/components/ui/Button';
import Loading from '@/components/features/Loading';
import Table from '@/components/ui/Table';
import Dropdown from './components/Dropdown';

import s from './UsersPage.module.scss';

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [openUserId, setOpenUserId] = useState<number | null>(null);

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

  const handleSort = () => {
    const sortedData = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedData);
  };

  const handleButtonClick = (userId: number) => {
    setOpenUserId((prevUserId) => (prevUserId === userId ? null : userId));
  };

  const columns = columnTitles.map((col, index) => (
    <div key={col.key} className={s.column}>
      {index === 0 ? col.title : col.title + ' '}
      {index !== 0 && index !== columnTitles.length - 1 && <Button className={s.theadBtn} onClick={handleSort} />}
    </div>
  ));
  const data = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(user => [
      <Button key={user.id} className={s.btn} onClick={() => handleButtonClick(user.id)} />,
      user.id,
      user.name,
      user.username,
      user.email,
      user.phone,
      user.address.city + ' ' + user.address.street + ' ' + user.address.zipcode,
      user.company.name,
      openUserId === user.id && <Dropdown key={user.id} hrefView={`/users/view/${user.id}`} hrefEdit={`/users/edit/${user.id}`} user={user} onClose={() => setOpenUserId(null)} />,
    ]);

  return (
    <div className={s.userContent}>
      <div className={s.title}>
        <Title title='Пользователи' />
        <div>
          <Link href='/users/create-user' className={s.link}>
            Создать нового пользователя
          </Link>
          <Search value={searchTerm} onChange={handleSearchChange} placeholder='Поиск' />
        </div>
      </div>
      {isLoading ? <Loading /> : <Table columns={columns} data={data} />}
      <p className={s.text}>Строк на странице: {users.length}</p>
    </div>
  );
};

export default UsersPage;
