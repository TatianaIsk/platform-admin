"use client";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation";

import { useRouter } from "next/navigation";
import { Task } from "../types/Task";
import { InitialState } from "../utils/initialState";
import { fetchUsers } from "@/app/users/actions/fetchUsers";
import { User } from "@/app/users/types/User";

import LinkBlock from "@/components/features/LinkBlock";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";

import s from "./CreateTask.module.scss";

const CreateTask = () => {
  const router = useRouter();

  const [task, setTask] = useState<Task | undefined>(undefined);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };

    fetchUserData();
  }, []);

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
        <Title title="создать задачу" className={s.title} />
        <div className={s.inputBlock}>
          <Input label="Заголовок" name="title" classNames={{ input: errors.title && s.inputError }} />
          <Select
            className={errors.userId && s.selectError}
            options={["Пользователь", ...users.map((user) => user.name)]}
            name="userId"
          />
        </div>
        <Input label="Описание" name="description" classNames={{ inputBlock: s.input }} />
        <Button className={s.btn} type="submit">
          Создать {">>>"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateTask;
