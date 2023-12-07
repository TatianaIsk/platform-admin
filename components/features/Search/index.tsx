import s from './Search.module.scss';

interface SearchProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ placeholder, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input className={s.search} type='search' placeholder={placeholder} onChange={handleInputChange} />;
};
export default Search;
