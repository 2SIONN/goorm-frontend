import { useState } from 'react';

const EMOJIS = ['🧙', '🤹', '🖥️', '📊', '🕵️'];
const EMOJI_STYLE = 'block border border-gray-300 p-5 peer-checked:bg-gray-200 rounded-sm';
const USER = {
  username: '',
  job: '',
  emoji: '',
};
export default function MyPage() {
  const [userInfo, setUserInfo] = useState({ ...USER });
  const handleChange = (e) => {
    const { name, value } = e.target;
    let text = value;
    if (name !== 'username') {
      text = value
        .split('-')
        .map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
        .join(' ');
    }
    setUserInfo((prev) => ({
      ...prev,
      [name]: text,
    }));
  };
  return (
    <div className="flex justify-center py-8 gap-8">
      <div className="min-w-1/3 border border-gray-300 rounded-xl p-4">
        <div className="mb-4">
          <label htmlFor="username">이름</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="이름을 입력하세요"
            autoComplete={false}
            className="w-full border border-gray-400 rounded-sm p-2 mt-2"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="job">직무</label>
          <select
            name="job"
            id="job"
            className="w-full border border-gray-400 rounded-sm p-2 mt-2"
            onChange={handleChange}
          >
            <option value="" defaultChecked>
              직무를 선택하세요
            </option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="data-scientist">Data Scientist</option>
            <option value="web-designer">Web Designer</option>
          </select>
        </div>
        <div>
          <p>이모지</p>
          <div className="flex gap-2 mt-2">
            {EMOJIS.map((emoji, idx) => (
              <div key={idx}>
                <input
                  type="radio"
                  name="emoji"
                  id={`emoji${idx}`}
                  className="hidden peer"
                  value={emoji}
                  onChange={handleChange}
                />
                <label htmlFor={`emoji${idx}`} className={EMOJI_STYLE}>
                  {emoji}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="min-w-1/3 border border-gray-300 rounded-xl p-4 flex items-center gap-2">
        <span className="text-4xl">{userInfo.emoji ? userInfo.emoji : '🤔'}</span>
        <div>
          <h2 className="font-bold">{userInfo.username ? userInfo.username : '아무개'}</h2>
          <small>{userInfo.job ? userInfo.job : '직무를 선택하세요'}</small>
        </div>
      </div>
    </div>
  );
}
