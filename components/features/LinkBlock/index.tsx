import Link from "next/link";

import clsx from "clsx";

import s from "./LinkBlock.module.scss";

interface LinkBlockProps {
  previousPageUrl?: string;
  links: {
    title: string;
    url: string;
  }[];
  classNames?: {
    links?: string;
    link?: string;
  };
}

const LinkBlock: React.FC<LinkBlockProps> = ({ previousPageUrl, links, classNames }) => (
  <div className={s.container}>
    {previousPageUrl && (
      <Link href={previousPageUrl} className={s.link}>
        {"<<<"} Назад
      </Link>
    )}
    <div className={clsx(s.links, classNames?.links)} key={previousPageUrl ?? "default-key"}>
      {links.map(({ url, title }) => (
        <Link key={url} href={url} className={clsx(s.link, classNames?.link)}>
          {title}
        </Link>
      ))}
    </div>
  </div>
);

export default LinkBlock;
