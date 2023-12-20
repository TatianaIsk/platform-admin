import { User } from "../types/User";

export const InitialState: User = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    city: "",
    zipcode: "",
  },
  phone: "",
  company: {
    name: "",
  },
};
