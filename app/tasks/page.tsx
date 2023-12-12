'use client';
import { useState, useEffect } from 'react';

import { fetchTasks } from './actions/fetchTasks';
import { fetchUsers } from '../users/actions/fetchUsers';
import { Task } from './types/Task';
import { columnTitles } from './data/Columns';
import { User } from '../users/types/User';

import completed from '@/assets/icons/light/task/completed-icon.svg';
import notCompleted from '@/assets/icons/light/task/notCompleted-icon.svg';

import Title from '@/components/ui/Title';
import Search from '@/components/features/Search';
import Button from '@/components/ui/Button';
import Loading from '@/components/features/Loading';
import Table from '@/components/ui/Table';
import Select from '@/components/ui/Select';

import s from './TaskPage.module.scss';
import Image from 'next/image';

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [selectedUser, setSelectedUser] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const statusOptions = ['Выполнено', 'Не выполнено'];

  useEffect(() => {
    const fetchTaskData = async () => {
      const taskData = await fetchTasks();
      setTasks(taskData);
      setIsLoading(false);
    };
    const fetchUserData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };

    fetchTaskData();
    fetchUserData();
  }, []);

  const columns = columnTitles.map((col) => (
    <div key={col.key} className={s.column}>
      {col.title}
      <Button className={s.theadBtn} />
    </div>
  ));
  const data = tasks
    .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(task => [task.id, users.find(user => user.id === task.userId)?.name, task.title, task.completed ? <Image src={completed} alt='' /> : <Image src={notCompleted} alt='' />]);

  return (
    <div className={s.taskContent}>
      <div className={s.title}>
        <Title title='Задачи' />
        <Search value={searchTerm} onChange={value => setSearchTerm(value)} placeholder='Поиск' />
      </div>
      <div className={s.filters}>
        <Select
          options={['Пользователь', ...users.map(user => user.name)]}
          value={selectedUser}
          onChange={value => {
            setSelectedUser(value);
          }}
        />
        <Select
          options={['Статус', ...statusOptions]}
          value={selectedStatus}
          onChange={value => {
            setSelectedStatus(value);
          }}
        />
      </div>
      {isLoading ? <Loading /> : <Table columns={columns} data={data} />}
    </div>
  );
};

export default TasksPage;
