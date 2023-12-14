import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { User } from '../types/User';
import { fetchUser } from '../actions/fetchUser';

import s from './ViewUser.module.scss';

const ViewUser = () => {
  const { id }: { id: string } = useParams();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await fetchUser(parseInt(id));
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  return <div>Посмотреть пользователя {id}</div>;
};

export default ViewUser;
