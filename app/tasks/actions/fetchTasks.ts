import axios from 'axios';

export const fetchTasks = async (currentPage: number, perPage: number, selectedUserName: string, selectedStatus: string) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${perPage}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
};
