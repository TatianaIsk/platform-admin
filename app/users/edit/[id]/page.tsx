"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import LinkBlock from "@/components/features/LinkBlock";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import s from "./EditUser.module.scss";
import { InitialState } from "../../utils/InitialState";
import { validationSchema } from "../../validation";
import { User } from "../../types/User";
import { UsersData } from "../../data/Users";

const EditUser = () => {
  const router = useRouter();
  const { id }: { id: string } = useParams();

  const [user, setUser] = useState<User | undefined>(undefined);

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
    router.push("/users");
  });

  const collectFormData = (data: Parameters<Parameters<typeof handleSubmit>[0]>[0]) => {
    const {
      name,
      username,
      email,
      phone,
      address: { zipcode, city, street },
      company: companyName,
    } = data;

    const formData = {
      name,
      username,
      email,
      phone,
      address: {
        zipcode,
        city,
        street,
      },
      company: {
        companyName,
      },
      ...user,
    };

    console.log(JSON.stringify(formData));
  };

  return (
    <FormProvider {...form}>
      <form className={s.container} onSubmit={onSubmit}>
        <LinkBlock
          previousPageUrl="/users"
          links={[
            { title: "Список", url: "/users" },
            { title: "Просмотр", url: "/users" },
          ]}
        />
        <Title title={`редактировать пользователя ${id}`} className={s.title} />
        <div className={s.inputBlock}>
          <Input
            label="ФИО"
            name="name"
            classNames={{ input: errors.name && s.inputError }}
            value={user?.name}
          />
          <Input label="Никнейм (eng)" name="username" value={user?.username} />
        </div>
        <div className={s.inputBlock}>
          <Input label="e-mail" name="email" classNames={{ input: errors.email && s.inputError }} value={user?.email} />
          <Input
            label="Телефон"
            name="phone"
            classNames={{ input: errors.phone && s.inputError }}
            value={user?.phone}
          />
        </div>
        <h3 className={s.subtitle}>Адрес</h3>
        <div className={s.inputBlock}>
          <Input
            label="Индекс"
            name="address.zipcode"
            classNames={{ input: errors.address?.zipcode && s.inputError }}
            value={user?.address.zipcode}
          />
          <Input
            label="Город"
            name="address.city"
            classNames={{ input: errors.address?.city && s.inputError }}
            value={user?.address.city}
          />
        </div>
        <Input
          label="Улица"
          classNames={{ inputBlock: s.input, input: errors.address?.street && s.inputError }}
          name="address.street"
          value={user?.address.street}
        />
        <h3 className={s.subtitle}>Компания</h3>
        <div className={s.inputBlock}>
          <Input label="Название" name="company.companyName" value={user?.company.name} />
        </div>
        <Button className={s.btn} type="submit">
          Создать {">>>"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default EditUser;
