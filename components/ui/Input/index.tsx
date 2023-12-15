import { ComponentPropsWithRef } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Error from '../Error';

import clsx from 'clsx';

import s from './Input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  htmlFor?: string;
  classNames?: {
    inputBlock?: string;
    input?: string;
  };
  name: string;
}

const Input: React.FC<InputProps> = ({ label, htmlFor, classNames, name, disabled, ...props }) => {
  const { register } = useFormContext();

  return (
    <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
      {label && <label className={s.label}>{label}</label>}
      <input id={htmlFor} className={clsx(s.input, classNames?.input)} placeholder='Введите данные' {...props} {...register(name, { disabled })} />
      <ErrorMessage name={name} render={({ message }) => <Error>{message}</Error>} />
    </div>
  );
};

export default Input;
