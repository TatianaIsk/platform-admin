import s from './Table.module.scss'

interface TableProps {
  columns: string[];
  data: string[][];
}

const Table: React.FC<TableProps> = ({ columns, data }) => (
  <table>
    <thead>
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
