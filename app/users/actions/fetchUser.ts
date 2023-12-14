import axios from 'axios';

export const fetchUser = async (id: number) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};
