'use client';
import { useState } from 'react';

import Button from '@/components/ui/Button';
import SidebarMenu from './SidebarMenu';

import s from './Sidebar.module.scss';
import Icon from '@/components/ui/Icon';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? s.sidebarOpen : s.sidebar}>
      <Button className={s.openBtn} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Icon name='arrowOpen' /> : <Icon name='arrowClose' />}
      </Button>
      {isOpen ? <SidebarMenu /> : ''}
    </div>
  );
};

export default Sidebar;
