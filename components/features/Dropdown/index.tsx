import { MouseEvent } from "react";

import Link from "next/link";

import Button from "@/components/ui/Button";

import s from "./Dropdown.module.scss";

interface DropdownProps {
  title: {
    title: string;
    id: number;
  };
  hrefView: string;
  hrefEdit: string;
}

const Dropdown: React.FC<DropdownProps> = ({ hrefView, hrefEdit, title }) => (
  <div className={s.dropdown}>
    <p className={s.title}>{title?.title} {title?.id}</p>
    <div className={s.dropdownContent}>
      <Link href={hrefView} className={s.link}>
        Посмотреть
      </Link>
      <Link href={hrefEdit} className={s.link}>
        Редактировать
      </Link>
      <Link href="/" className={s.link}>
        Удалить
      </Link>
    </div>
  </div>
);

export default Dropdown;
