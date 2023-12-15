'use client';
import { useState, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Image from 'next/image';

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
import Pagination from '@/components/features/Pagination';

import s from './TaskPage.module.scss';
import Link from 'next/link';

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [currentPage, setCurrentPage] = useState(0);
  const [perPage] = useState(25);

  const [selectedUserName, setSelectedUserName] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');

  const statusOptions = ['Выполнено', 'Не выполнено'];

  useEffect(() => {
    const fetchTaskData = async () => {
      setIsLoading(true);
      const taskData = await fetchTasks(currentPage, perPage, selectedUserName, selectedStatus);
      setTasks(taskData);
      setIsLoading(false);
    };
    const fetchUserData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };

    fetchTaskData();
    fetchUserData();
  }, [currentPage, perPage, selectedUserName, selectedStatus]);

  const columns = columnTitles.map(col => (
    <div key={col.key} className={s.column}>
      {col.title}
      <Button className={s.theadBtn} />
    </div>
  ));
  const data = tasks
    .filter(
      task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedUserName === '' || users.find(user => user.id === task.userId)?.name === selectedUserName) &&
        (selectedStatus === '' || selectedStatus === 'Статус' || task.completed === (selectedStatus === 'Выполнено'))
    )
    .map(task => [task.id, users.find(user => user.id === task.userId)?.name, task.title, task.completed ? <Image src={completed} alt='' /> : <Image src={notCompleted} alt='' />]);
  return (
    <FormProvider {...useForm()}>
      <div className={s.taskContent}>
        <div className={s.title}>
          <Title title='Задачи' />
          <Search value={searchTerm} onChange={value => setSearchTerm(value)} placeholder='Поиск' />
        </div>
        <div className={s.filters}>
          <Select options={['Пользователь', ...users.map(user => user.name)]} name='users' onChange={selectedUser => setSelectedUserName(selectedUser === 'Пользователь' ? '' : selectedUser)} />
          <Select options={['Статус', ...statusOptions]} name='status' onChange={selectedStatus => setSelectedStatus(selectedStatus)} />
        </div>
        {isLoading ? <Loading /> : <Table columns={columns} data={data} />}
        <div className={s.footer}>
          <Link className={s.btnCreate} href='/tasks/create-task'>
            Создать {'>>>'}
          </Link>
          <div className={s.pagination}>
            <p className={s.text}>Строк на странице: {perPage}</p>
            <Pagination pageCount={9} onPageChange={selectedPage => setCurrentPage(selectedPage)} />
          </div>
        </div>
      </div>
    </FormProvider>
  );
};

export default TasksPage;
