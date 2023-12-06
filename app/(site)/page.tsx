import Header from '@/components/features/Header';

import s from './MainPage.module.scss';
import Sidebar from '@/components/features/Sidebar';

const MainPage = () => (
  <div className={s.container}>
    <Header />
    <Sidebar />
  </div>
);

export default MainPage;
