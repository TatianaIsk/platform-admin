import axios from 'axios';

import { Task } from '../types/Task';

export const createTask = async (user: Task) => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);

    const data = response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error('Ошибка при создании задачи:', error);
    throw error;
  }
};
