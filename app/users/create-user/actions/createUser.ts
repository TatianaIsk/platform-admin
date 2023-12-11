import axios from 'axios';

import { User } from '../../types/User';

export const createUser = async (user: User) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);

    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error('Ошибка при создании пользователя:', error);
    throw error;
  }
};
