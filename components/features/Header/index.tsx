import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import s from './Header.module.scss';
import Button from '@/components/ui/Button';

interface HeaderProps extends PropsWithChildren {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <div className={clsx(s.container, className)}>
      <div className={s.logo}>M-Social</div>
      <div>
        <Button className={s.themeBtn}/>
				<Button className={s.loginBtn}/>
      </div>
    </div>
  );
};

export default Header;
