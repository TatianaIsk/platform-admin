"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

import LinkBlock from "@/components/features/LinkBlock";

import { Task } from "../../types/Task";
import { TasksData } from "../../data/Tasks";

import { yupResolver } from "@hookform/resolvers/yup";
import { InitialState } from "../../utils/initialState";
import { validationSchema } from "../../validation";

import s from "./EditTask.module.scss";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import { User } from "@/app/users/types/User";
import { fetchUsers } from "@/app/users/actions/fetchUsers";

const EditTask = () => {
  const router = useRouter();
  const { id }: { id: string } = useParams();

  const [task, setTask] = useState<Task | undefined>(undefined);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };

    fetchUserData();
  }, []);

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

  const form = useForm({
    defaultValues: InitialState,
    resolver: yupResolver(validationSchema),
  });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = handleSubmit((data) => {
    collectFormData(data);
    router.push("/tasks");
  });

  const collectFormData = (data: Parameters<Parameters<typeof handleSubmit>[0]>[0]) => {
    const { userId, title, completed } = data;

    const formData = {
      userId,
      title,
      completed,
      ...task,
    };

    console.log(JSON.stringify(formData));
  };

  return (
    <FormProvider {...form}>
      <form className={s.container} onSubmit={onSubmit}>
        <LinkBlock
          previousPageUrl="/tasks"
          links={[
            { title: "Список", url: "/tasks" },
            { title: "Просмотр", url: "/tasks" },
          ]}
        />
        <Title title={`редактировать задачу ${id}`} className={s.title} />
        <div className={s.inputBlock}>
          <Input
            label="Заголовок"
            name="title"
            classNames={{ input: errors.title && s.inputError }}
            value={task?.title}
          />
          <Select
            className={errors.userId && s.selectError}
            options={["Пользователь", ...users.map((user) => user.name)]}
            name="userId"
            value={users.find((user) => user.id === task?.userId)?.name || ""}
          />
        </div>
        <Button className={s.btn} type="submit">
          Создать {">>>"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default EditTask;
