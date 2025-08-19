import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardAction } from './ui/card';

import { cn } from '@/lib/utils';

export default function ProfileCard({ user }) {
  const { name, profile, intro, GitHub, blog } = user;
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>플레이어</CardTitle>
        <CardAction className="hover:cursor-pointer">⋯</CardAction>
      </CardHeader>
      <CardContent>
        <img
          src={profile}
          alt={name}
          className="rounded-full w-[150px] h-[150px] object-cover my-1 mx-auto"
        />
        <p>
          <FontAwesomeIcon icon={faUser} className="mr-1" />
          {name}
        </p>
        <small>{intro}</small>
      </CardContent>
      <CardFooter className={cn('justify-around text-3xl')}>
        {GitHub && (
          <a
            href={GitHub}
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 duration-150 ease-in-out"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        )}
        {blog && (
          <a
            href={blog}
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-500 duration-150 ease-in-out"
          >
            <FontAwesomeIcon icon={faBlog} />
          </a>
        )}
      </CardFooter>
    </Card>
  );
}
