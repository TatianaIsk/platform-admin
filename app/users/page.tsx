'use client';
import Header from '@/components/features/Header';
import Sidebar from '@/components/features/Sidebar';
import Title from '@/components/ui/Title';
import Search from '@/components/features/Search';

import s from './UsersPage.module.scss';
import PageContent from './components/PageContent';

const UsersPage = () => {
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
          <PageContent />
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
