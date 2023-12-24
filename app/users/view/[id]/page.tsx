"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { User } from "../../types/User";
import { UsersData } from "../../data/Users";

import s from "./ViewUser.module.scss";
import Title from "@/components/ui/Title";
import LinkBlock from "@/components/features/LinkBlock";

const ViewUser = () => {
  const { id }: { id: string } = useParams();

  const [user, setUser] = useState<User>();

  return (
    <div className={s.container}>
      <Title title="Просмотр пользователя" className={s.title}/>
      <LinkBlock
        previousPageUrl="/users"
        links={[
          { title: "Редактировать", url: "/users" },
          { title: "Список", url: "/users" },
        ]}
      />
    </div>
  );
};

export default ViewUser;
