import { Task } from "@/app/tasks/types/Task";

import s from "./TableTask.module.scss";

interface TableTaskProps {
  data: Task[];
  userId: string | undefined;
}

const TableTask: React.FC<TableTaskProps> = ({ data, userId }) => (
  <table className={s.table}>
    <tbody>
      {data.map((rowData, rowIndex) => (
        <>
          <tr key={rowIndex} className={s.trTable}>
            <td>id:</td>
						<td>{rowData.id}</td>
          </tr>
          <tr>
            <td>Пользователь:</td>
						<td>{userId}</td>
          </tr>
          <tr>
            <td>Заголовок:</td>
						<td>{rowData.title}</td>
          </tr>
          <tr>
            <td>Статус готовности:</td>
						<td>{rowData.completed === false ? 'Не готова' : 'Готова'}</td>
          </tr>
        </>
      ))}
    </tbody>
  </table>
);

export default TableTask;

