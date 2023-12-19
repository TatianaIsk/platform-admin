import { MouseEvent } from "react";

import Link from "next/link";

import Button from "@/components/ui/Button";

import s from "./Dropdown.module.scss";

interface DropdownProps {
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
  hrefView: string;
  hrefEdit: string;
}

const Dropdown: React.FC<DropdownProps> = ({ onClose, hrefView, hrefEdit }) => (
  <div className={s.dropdown}>
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
    <Button onClick={onClose} className={s.closeBtn}>
      X
    </Button>
  </div>
);

export default Dropdown;
