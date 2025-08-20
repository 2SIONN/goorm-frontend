import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import ProfileCard from '@/components/member/ProfileCard';

const URL = '/users.json';

// const userPromise = getUsers();

export default function Profile() {
  const getUsers = async () => {
    const { data } = await axios.get(URL);
    return data;
  };
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000 * 60,
  });
  // const users = use(userPromise);
  // useEffect(() => {
  //   getUsers();
  // }, []);
  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError) {
    return <div>에러 발생: {error.message}</div>;
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-2 sm:gap-4 p-4">
      {users && users.length > 0 && users.map((user, idx) => <ProfileCard key={idx} user={user} />)}
    </div>
  );
}
