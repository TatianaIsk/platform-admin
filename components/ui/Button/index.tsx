import { PropsWithChildren, ComponentPropsWithRef } from 'react';

import { IconsVariants } from '../Icon';

import clsx from 'clsx';

import s from './Button.module.scss';

interface ButtonProps extends PropsWithChildren<ComponentPropsWithRef<'button'>> {
  className?: string;
  icon?: IconsVariants;
}

const Button: React.FC<ButtonProps> = ({ className, children, icon, ...props }) => (
  <button className={clsx(s.button, className)} {...props}>
    {children}
    {icon}
  </button>
);

export default Button;
