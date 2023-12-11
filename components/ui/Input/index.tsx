import { ComponentPropsWithRef } from 'react';

import clsx from 'clsx';

import s from './Input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  htmlFor?: string;
  classNames?: {
    inputBlock?: string;
    input?: string;
  };
}

const Input: React.FC<InputProps> = ({ label, htmlFor, classNames, ...props }) => (
  <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
    {label && <label className={s.label}>{label}</label>}
    <input id={htmlFor} className={clsx(s.input, classNames?.input)} placeholder='Введите данные'/>
  </div>
);

export default Input;
