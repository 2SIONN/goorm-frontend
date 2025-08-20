import { useState } from 'react';
import { Link } from 'react-router';

import InputField from '@/components/form/InputField';
import { EMAIL_REGEX } from '@/constants/regex';
import { ROUTES } from '@/lib/routes';

const INITIAL_FORM = {
  name: '',
  email: '',
  password: '',
  confirm: '',
};

const IMAGE = '/signup-banner.png';

export default function Register() {
  const [form, setForm] = useState({ ...INITIAL_FORM });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const error = {};
    if (!form.name.trim()) {
      error.name = '이름을 입력하세요.';
    } else if (!EMAIL_REGEX.test(form.email.trim())) {
      error.email = '이메일 형식이 올바르지 않습니다.';
    } else if (!form.password.trim()) {
      error.password = '비밀번호를 입력해주세요.';
    } else if (!form.confirm.trim() || form.confirm !== form.password) {
      error.confirm = '비밀번호가 일치하지 않습니다.';
    }
    setErrors(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    console.log('회원가입 데이터: ', form);
    setForm({ ...INITIAL_FORM });
    alert(`🎉 환영합니다! ${form.name}님!`);
  };

  return (
    <div className="flex gap-8 justify-center items-center py-20">
      <div className="w-1/3 px-8 py-6 border-r border-gray-300 [&_div]:mb-4">
        <h1 className="text-center pb-6 text-2xl font-bold border-b border-gray-300 mb-6">
          회원가입
        </h1>
        <form onSubmit={handleSubmit}>
          <InputField
            label="이름"
            type="text"
            id="name"
            name="name"
            value={form.name}
            handleChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-sm mt-2"
            placeholder="이름을 입력해주세요"
            error={errors.name}
          />
          <InputField
            label="이메일"
            type="email"
            id="email"
            name="email"
            value={form.email}
            handleChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-sm mt-2"
            placeholder="이메일 형식에 맞춰 입력해주세요 (test@exmaple.com)"
            error={errors.email}
          />
          <InputField
            label="비밀번호"
            type="password"
            id="password"
            name="password"
            value={form.password}
            handleChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-sm mt-2"
            placeholder="비밀번호를 입력해주세요"
            error={errors.password}
          />
          <InputField
            label="비밀번호 확인"
            type="password"
            id="confirm"
            name="confirm"
            value={form.confirm}
            handleChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-sm mt-2"
            placeholder="비밀번호 확인"
            error={errors.confirm}
          />
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 mb-2 border border-sky-500 rounded-sm cursor-pointer hover:bg-sky-300 hover:text-white duration-200"
            >
              가입하기
            </button>
            <small>
              이미 계정이 있으신가요?{' '}
              <Link to={ROUTES.AUTH.LOGIN} className="text-sky-500 underline">
                로그인
              </Link>
            </small>
          </div>
        </form>
      </div>
      <img
        src={IMAGE}
        alt="가입 배너"
        draggable={false}
        className="w-1/3 object-cover rounded-sm opacity-90"
      />
    </div>
  );
}
