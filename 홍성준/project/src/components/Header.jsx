import { faCloud } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';

import { ROUTES } from '@/lib/routes';

const ANCHOR_STYLE = 'hover:text-zinc-300 duration-200 ease-in-out';

export default function Header({ handleOpen, handleClose }) {
  return (
    <header className="sticky top-0 flex items-center justify-between min-h-[60px] p-4 bg-black text-white">
      <button
        className="hover:cursor-pointer text-2xl text-sky-500"
        onClick={handleOpen}
        aria-label="사이드바 토글"
        title="사이드바 토글"
      >
        <FontAwesomeIcon icon={faCloud} />
      </button>
      <div className="flex sm:gap-6 gap-2">
        <Link to={ROUTES.AUTH.LOGIN} className={ANCHOR_STYLE} onClick={handleClose}>
          로그인
        </Link>
        <Link to={ROUTES.AUTH.REGISTER} className={ANCHOR_STYLE} onClick={handleClose}>
          회원가입
        </Link>
      </div>
    </header>
  );
}
