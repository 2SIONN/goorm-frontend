import { useState } from "react";

export default function Refister() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState();

  const onChange = (e) =>{
    setForm()
  }

  const onSumbit()

  return (
    <form onSubmit={onSumbit}>
      <h2>회원가입</h2>
      <div>
        <label>이름</label>
        <input
          name="name"
          value={form.name}
          placeholder="이름을 입력하세요"
          onChange={onChange}
        />
        {errors.name && <div className="text-red">{form.name}</div>}
      </div>
      <div>
        <label>이메일</label>
        <input
          name="email"
          value={form.email}
          placeholder="이메일을 입력하세요"
          onChange={onChange}
        />
        {errors.name && <div className="text-red">{form.name}</div>}
      </div>
      <div>
        <label>비밀번호</label>
        <input
          name="password"
          value={form.password}
          placeholder="비밀번호를 입력하세요"
          onChange={onChange}
        />
        {errors.name && <div className="text-red">{form.name}</div>}
      </div>
    </form>
  );
}
