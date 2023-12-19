import { ComponentPropsWithRef, useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Error from '../Error';

import clsx from 'clsx';

import s from './Input.module.scss';

interface InputProps extends ComponentPropsWithRef<'input'> {
  label?: string;
  classNames?: {
    inputBlock?: string;
    input?: string;
  };
  name: string;
}

const Input: React.FC<InputProps> = ({ label, classNames, name, disabled, ...props }) => {
  const { register } = useFormContext();
  const id = useId();

  return (
    <div className={clsx(s.inputBlock, classNames?.inputBlock)}>
      {label && (
        <label htmlFor={id} className={s.label}>
          {label}
        </label>
      )}
      <input id={id} className={clsx(s.input, classNames?.input)} placeholder='Введите данные' {...props} {...register(name, { disabled })} />
      <ErrorMessage name={name} render={({ message }) => <Error>{message}</Error>} />
    </div>
  );
};

export default Input;
