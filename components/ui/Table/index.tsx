import s from './Table.module.scss';

interface TableProps {
  columns: (string | React.ReactNode)[];
  data: (string | number)[][];
}

const Table: React.FC<TableProps> = ({ columns, data }) => (
  <table className={s.table}>
    <thead className={s.thead}>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((rowData, rowIndex) => (
        <tr key={rowIndex}>
          {rowData.map((cellData, cellIndex) => (
            <td key={cellIndex}>{cellData}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
