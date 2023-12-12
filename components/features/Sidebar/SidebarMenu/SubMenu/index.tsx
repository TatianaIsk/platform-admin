import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';

import Button from '@/components/ui/Button';

import s from './SubMenu.module.scss';

interface SubMenuProps {
  label: string;
  links: {
    href: string;
    title: string;
  }[];
}

const SubMenu: React.FC<SubMenuProps> = ({ label, links }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <>
      <div className={s.linksMenu}>
        <Link href='/' className={s.linkMenu}>
          {label}
        </Link>
        <Button className={isMenuOpen ? s.menuBtnClose : s.menuBtn} onClick={() => setMenuOpen(!isMenuOpen)} />
      </div>
      {isMenuOpen && (
        <div className={s.submenu}>
          {links.map(({ href, title }) => (
            <Link key={href} href={href} className={activeLink === href ? s.active : s.sublink}>
              {title}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default SubMenu;
