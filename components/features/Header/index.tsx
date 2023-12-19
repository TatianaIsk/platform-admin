'use client';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';

import clsx from 'clsx';

import s from './Header.module.scss';
import Button from '@/components/ui/Button';
import Link from 'next/link';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children }) => (
  <header className={clsx(s.container, className)}>
    <Link className={s.logo} href='/'>
      M-Social
    </Link>
    <div>
      <Button className={s.themeBtn} />
      <Button className={s.loginBtn} />
    </div>
  </header>
);

export default Header;
