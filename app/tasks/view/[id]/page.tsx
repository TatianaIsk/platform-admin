"use client";
import { useEffect, useState } from "react";

import { useParams } from "next/navigation";

import { Task } from "../../types/Task";
import { TasksData } from "../../data/Tasks";

import LinkBlock from "@/components/features/LinkBlock";
import Title from "@/components/ui/Title";
import TableTask from "@/components/ui/Table/TableTask";

import s from "./ViewTask.module.scss";
import { UsersData } from "@/app/users/data/Users";

const ViewPage = () => {
  const { id }: { id: string } = useParams();

  const [task, setTask] = useState<Task>();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const taskData = TasksData.find((task) => task.id === Number(id));
        if (taskData) {
          setTask(taskData);
        } else {
          console.error("task is not found");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchTask();
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
        classNames={{ link: s.link, links: s.links }}
        links={[
          { title: "Пользователи", url: `/users/view/${id}` },
          { title: "Посты", url: "/" },
          { title: "Альбомы", url: "/" },
        ]}
      />
      <TableTask data={task ? [task] : []} userId={UsersData.find((user) => user.id === task?.userId)?.name} />
    </div>
  );
};

export default ViewPage;
