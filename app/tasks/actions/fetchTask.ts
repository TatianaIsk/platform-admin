import axios from 'axios';

export const fetchTask = async (id: number) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching task:', error);
    return null;
  }
};
