import Header from '@/components/features/Header';
import Sidebar from '@/components/features/Sidebar';
import PageContent from './conponents/PageContent';

import s from './MainPage.module.scss';

const MainPage = () => (
  <div className={s.container}>
    <Header />
    <div className={s.content}>
      <Sidebar />
      <PageContent />
    </div>
  </div>
);

export default MainPage;
