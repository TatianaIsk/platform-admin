"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { User } from "../../types/User";
import { UsersData } from "../../data/Users";

import s from "./ViewUser.module.scss";
import Title from "@/components/ui/Title";
import LinkBlock from "@/components/features/LinkBlock";
import TableUser from "@/components/ui/Table/TableUser";
import Link from "next/link";
import { title } from "process";

const ViewUser = () => {
  const { id }: { id: string } = useParams();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = UsersData.find((user) => user.id === Number(id));
        if (userData) {
          setUser(userData);
        } else {
          console.error("user is not found");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [id]);

  return (
    <div className={s.container}>
      <LinkBlock
        previousPageUrl="/users"
        links={[
          { title: "Редактировать", url: "/users" },
          { title: "Список", url: "/users" },
        ]}
      />
      <Title title="Просмотр пользователя" className={s.title} />
      <LinkBlock
        classNames={{link: s.link, links: s.links}}
        links={[
          { title: "Задачи", url: "/" },
          { title: "Посты", url: "/" },
          { title: "Альбомы", url: "/" },
        ]}
      />
      <TableUser data={user ? [user] : []} />
    </div>
  );
};

export default ViewUser;
