"use client";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";

import { validationSchema } from "../validation";
import { yupResolver } from "@hookform/resolvers/yup";

import { User } from "../types/User";
import { InitialState } from "../utils/InitialState";

import LinkBlock from "@/components/features/LinkBlock";
import Title from "@/components/ui/Title";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import s from "./CreateUser.module.scss";

const CreateUser = () => {
  const router = useRouter();

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

    const formData = { name, username, email, phone, zipcode, city, street, companyName };

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
        <Title title="создать пользователя" className={s.title} />
        <div className={s.inputBlock}>
          <Input label="ФИО" name="name" classNames={{ input: errors.name && s.inputError }} />
          <Input label="Никнейм (eng)" name="username" />
        </div>
        <div className={s.inputBlock}>
          <Input label="e-mail" name="email" classNames={{ input: errors.email && s.inputError }} />
          <Input label="Телефон" name="phone" classNames={{ input: errors.phone && s.inputError }} />
        </div>
        <h3 className={s.subtitle}>Адрес</h3>
        <div className={s.inputBlock}>
          <Input
            label="Индекс"
            name="address.zipcode"
            classNames={{ input: errors.address?.zipcode && s.inputError }}
          />
          <Input label="Город" name="address.city" classNames={{ input: errors.address?.city && s.inputError }} />
        </div>
        <Input
          label="Улица"
          classNames={{ inputBlock: s.input, input: errors.address?.street && s.inputError }}
          name="address.street"
        />
        <h3 className={s.subtitle}>Компания</h3>
        <div className={s.inputBlock}>
          <Input label="Название" name="company.companyName" />
        </div>
        <Button className={s.btn} type="submit">
          Создать {">>>"}
        </Button>
      </form>
    </FormProvider>
  );
};

export default CreateUser;
