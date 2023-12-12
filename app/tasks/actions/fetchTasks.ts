import axios from 'axios';

export const fetchTasks = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};
