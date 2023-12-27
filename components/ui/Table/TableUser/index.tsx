import { User } from "@/app/users/types/User";

import s from "./TableUser.module.scss";

interface TableUserProps {
  data: User[];
}

const TableUser: React.FC<TableUserProps> = ({ data }) => (
  <table className={s.table}>
    <tbody>
      {data.map((rowData, rowIndex) => (
        <>
          <tr key={rowIndex} className={s.trTable}>
            <td>id:</td>
						<td>{rowData.id}</td>
          </tr>
          <tr>
            <td>Имя:</td>
						<td>{rowData.name}</td>
          </tr>
          <tr>
            <td>Никнейм:</td>
						<td>{rowData.username}</td>
          </tr>
          <tr>
            <td>Email:</td>
						<td>{rowData.email}</td>
          </tr>
          <tr>
            <td>Адрес:</td>
						<td>{rowData.address.city + " " + rowData.address.street + " " + rowData.address.zipcode}</td>
          </tr>
          <tr>
            <td>Телефон:</td>
						<td>{rowData.phone}</td>
          </tr>
          <tr>
            <td>Компания:</td>
						<td>{rowData.company.name}</td>
          </tr>
        </>
      ))}
    </tbody>
  </table>
);

export default TableUser;
