import Link from 'next/link';

import s from './LinkBlock.module.scss';

interface LinkBlockProps {
  previousPageUrl: string;
  links: {
    title: string;
    url: string;
  }[];
}

const LinkBlock: React.FC<LinkBlockProps> = ({ previousPageUrl, links }) => (
  <div className={s.container}>
    <Link href={previousPageUrl}> {'<<<'} Назад</Link>
    <div className={s.links} key={previousPageUrl}>
      {links.map(link => (
        <Link key={link.url} href={link.url}>
          {link.title}
        </Link>
      ))}
    </div>
  </div>
);

export default LinkBlock;