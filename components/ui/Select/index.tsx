import s from './Select.module.scss';

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={e => onChange(e.target.value)} className={s.select}>
      {options.map((option, index) => (
        <option key={index} value={option} className={s.option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
