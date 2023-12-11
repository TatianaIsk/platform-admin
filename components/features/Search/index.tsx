import s from './Search.module.scss';

interface SearchProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, value, onChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <input type='text' className={s.search} placeholder={placeholder} value={value} onChange={handleInputChange} />;
};
export default Search;
