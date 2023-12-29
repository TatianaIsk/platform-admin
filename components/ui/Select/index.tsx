import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import Error from "../Error";

import clsx from "clsx";

import s from "./Select.module.scss";

interface SelectProps {
  options: string[];
  className?: string;
  name: string;
  value?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, className, name, disabled, onChange, value }) => {
  const { register } = useFormContext();

  return (
    <>
      <select
        className={clsx(s.select, className)}
        {...register(name, { disabled })}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
      >
        {value && <option>{value}</option>}
        {options.map((option, index) => (
          <option key={index} value={option} className={s.option}>
            {option}
          </option>
        ))}
      </select>
      <ErrorMessage name={name} render={({ message }) => <Error>{message}</Error>} />
    </>
  );
};

export default Select;
