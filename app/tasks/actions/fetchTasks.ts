import axios from 'axios';

export const fetchTasks = async (currentPage: number, perPage: number) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${perPage}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};
