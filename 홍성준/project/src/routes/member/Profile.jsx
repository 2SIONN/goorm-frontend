import { useEffect, useState } from 'react';

import ProfileCard from '@/components/ProfileCard';

const URL = '/users.json';

export default function Profile() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      if (data) {
        setUsers(data);
      } else {
        throw new Error('Data not loaded');
      }
    } catch (err) {
      console.error('Error: ', err);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 sm:gap-4 p-4">
      {users.length > 0 && users.map((user, idx) => <ProfileCard key={idx} user={user} />)}
    </div>
  );
}
