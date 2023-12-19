export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  address: {
    city: string;
    street: string;
    zipcode: string;
  };
  company: {
    name: string;
  };
};
