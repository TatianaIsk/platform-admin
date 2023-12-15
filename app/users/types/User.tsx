import { FieldValues } from 'react-hook-form';
export interface User extends FieldValues {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}
