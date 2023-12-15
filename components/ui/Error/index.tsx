import { PropsWithChildren } from 'react';

import clsx from 'clsx';

import s from './Error.module.scss';

interface ErrorProps extends PropsWithChildren {
  className?: string;
}

const Error: React.FC<ErrorProps> = ({ children, className }) => <p className={clsx(s.error, className)}>{children}</p>;

export default Error;
