import Link from 'next/link';

import s from './SidebarMenu.module.scss';

const SidebarMenu = () => {
  return (
    <nav className={s.wrapper}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SidebarMenu;