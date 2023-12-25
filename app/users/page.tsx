"use client";
import { useState } from "react";
import Link from "next/link";

import { columnTitles } from "./data/Columns";
import { UsersData } from "./data/Users";

import Title from "@/components/ui/Title";
import Search from "@/components/features/Search";
import Button from "@/components/ui/Button";
import Loading from "@/components/features/Loading";
import Table from "@/components/ui/Table";
import Dropdown from "./components/Dropdown";

import s from "./UsersPage.module.scss";
import { User } from "./types/User";
import Modal from "@/components/features/Modal";

const users: User[] = UsersData.map(({ id, name, username, email, phone, address, company }) => ({
  id,
  name,
  username,
  email,
  phone,
  address: {
    city: address.city,
    street: address.street,
    zipcode: address.zipcode,
  },
  company: {
    name: company.name,
  },
}));

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openUserId, setOpenUserId] = useState<number | null>(null);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
  };

  const handleButtonClick = (userId: number) => {
    setOpenUserId((prevUserId) => (prevUserId === userId ? null : userId));
  };

  const columns = columnTitles.map((col, index) => (
    <div key={col.key} className={s.column}>
      {index === 0 ? col.title : col.title + " "}
      {index !== 0 && index !== columnTitles.length - 1 && <Button className={s.theadBtn} onClick={handleSort} />}
    </div>
  ));

  const filteredData = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const data = filteredData.map((user) => [
    <div key={user.id}>
      <Button className={s.btn} onClick={() => handleButtonClick(user.id)} />
    </div>,
    user.id,
    user.name,
    user.username,
    user.email,
    user.phone,
    user.address.city + " " + user.address.street + " " + user.address.zipcode,
    user.company.name,
  ]);

  return (
    <div className={s.userContent}>
      <div className={s.title}>
        <Title title="Пользователи" />
        <div>
          <Link href="/users/create-user" className={s.link}>
            Создать нового пользователя
          </Link>
          <Search value={searchTerm} onChange={handleSearchChange} placeholder="Поиск" />
        </div>
      </div>
      {isLoading ? <Loading /> : <Table columns={columns} data={data} />}
      <Modal open={openUserId !== null} onClose={() => setOpenUserId(null)}>
        {openUserId !== null && (
          <Dropdown
            hrefView={`/users/view/${openUserId}`}
            hrefEdit={`/users/edit/${openUserId}`}
            user={filteredData.find((user) => user.id === openUserId)}
          />
        )}
      </Modal>
      <p className={s.text}>Строк на странице: {filteredData.length}</p>
    </div>
  );
};

export default UsersPage;
