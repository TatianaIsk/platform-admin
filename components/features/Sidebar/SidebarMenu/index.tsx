import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import SubMenu from './SubMenu';

import s from './SidebarMenu.module.scss';

const SidebarMenu = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <div className={s.content}>
      <Link href='/users' className={activeLink === '/users' ? s.active : s.link}>
        Пользователи
      </Link>
      <Link href='/tasks' className={s.link}>
        Задания
      </Link>
      <SubMenu
        label='Графика'
        links={[
          { href: '/images', title: 'Картинки' },
          { href: '/albums', title: 'Альбомы' },
        ]}
      />
      <SubMenu
        label='Блог'
        links={[
          { href: '/posts', title: 'Посты' },
          { href: '/comments', title: 'Комментарии' },
        ]}
      />
    </div>
  );
};

export default SidebarMenu;
