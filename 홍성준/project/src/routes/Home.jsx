import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Markdown from 'react-markdown';
import { Link } from 'react-router';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CURRICULUM, INTRO, PLAYER_INTRO } from '@/constants/texts';
import { ROUTES } from '@/lib/routes';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="flex flex-col justify-around py-4 px-10 min-h-screen">
      <div className="flex justify-center py-8 gap-8">
        <Card className={cn('py-6 w-1/2')}>
          <CardHeader>
            <CardTitle>로그인/회원가입</CardTitle>
            <CardDescription>React · JavaScript · 웹 기술, 기초부터 심화까지</CardDescription>
          </CardHeader>
          <CardContent>{INTRO}</CardContent>
          <CardFooter className={cn('justify-end')}>
            <Link to={ROUTES.AUTH.LOGIN} className="hover:text-sky-500 duration-200">
              로그인하기 <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </CardFooter>
        </Card>
        <Card className={cn('py-6 w-1/2')}>
          <CardHeader>
            <CardTitle>플레이어 소개</CardTitle>
            <CardDescription>React와 웹 기술을 배우며 함께 성장하는 도전자</CardDescription>
          </CardHeader>
          <CardContent>{PLAYER_INTRO}</CardContent>
          <CardFooter className={cn('justify-end')}>
            <Link to={ROUTES.MEMBER.PROFILE} className="hover:text-sky-500 duration-200">
              더 알아보기 <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </CardFooter>
        </Card>
      </div>
      <Card className={cn('py-6')}>
        <CardHeader>
          <CardTitle>커리큘럼</CardTitle>
        </CardHeader>
        <CardContent>
          <Markdown>{CURRICULUM}</Markdown>
        </CardContent>
      </Card>
    </div>
  );
}
