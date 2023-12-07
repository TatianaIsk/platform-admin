import clsx from 'clsx';

import s from './Title.module.scss';

interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => <h1 className={clsx(s.title, className)}>{title}</h1>;

export default Title;
