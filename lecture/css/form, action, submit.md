# form, action, submit

날짜: 2025년 7월 10일
중요도: 높음

# form, action, submit 완전 이해하기

## 🌟 전체 그림 먼저 볼까?

웹페이지에서 **회원가입**, **로그인**, **댓글 쓰기** 같은 걸 할 수 있는 이유는?

👉 바로 **form 태그** 덕분이야!

---

## 🔲 1. form 태그란?

### ✔️ 정의

`<form>`은 **사용자한테 입력받은 값을 서버로 보내주는 틀**이야.

> 마치 봉투야. 입력한 내용들을 넣어서, 서버라는 주소로 보내는 거지!
> 

### ✔️ 구조 예시

```html
<form action="/signup" method="POST">
  <input type="text" name="username" />
  <button type="submit">회원가입</button>
</form>

```

---

## 🧭 2. action 속성이란?

### ✔️ 정의

`action`은 **"어디로 보낼까?"** 를 정하는 거야. 즉, **서버의 주소(URL)** 를 말해.

예시:

```html
<form action="/login">

```

👉 사용자가 입력한 데이터를 `/login`이라는 주소로 보내겠다는 뜻이야!

---

## 📬 3. method 속성은 뭐야?

`method`는 데이터를 **어떻게 보낼지 방법**을 정하는 거야.

### 🔹 대표적인 2가지 방식

| 방식 | 설명 | 언제 씀? |
| --- | --- | --- |
| `GET` | 주소창에 정보가 보임 | 검색창, 간단한 요청 |
| `POST` | 주소창에 정보가 안 보임 | 로그인, 회원가입 등 |

예시:

```html
<form action="/login" method="POST">

```

---

## ✅ 4. submit 버튼이 뭐야?

### ✔️ 정의

`submit` 버튼을 누르면 **form이 실행**돼!

즉, 입력한 값이 **action에 적힌 주소로 전송**되는 거야!

```html
<button type="submit">보내기</button>

```

또는

```html
<input type="submit" value="제출하기" />

```

---

## 💡 5. 예시로 전체 정리!

```html
<form action="/welcome" method="POST">
  이름: <input type="text" name="username" /><br />
  나이: <input type="number" name="age" /><br />
  <button type="submit">제출</button>
</form>

```

- 사용자가 이름과 나이를 입력하고
- "제출" 버튼을 누르면
- `/welcome` 이라는 주소로 이 정보가 POST 방식으로 전송됨!

---

## 🎥 6. 애니메이션으로 생각해보기!

1. 너는 글을 쓰고
2. 그 글을 **봉투(form)**에 넣고
3. **주소(action)** 를 적고
4. **전송버튼(submit)** 을 누르면
5. 우체부가 서버에 배달하는 거야!

---

## 🧪 7. 브라우저에서 직접 해보기

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>내 첫 번째 폼</h2>
    <form action="<https://www.google.com/search>" method="GET">
      검색어: <input type="text" name="q" />
      <button type="submit">구글 검색</button>
    </form>
  </body>
</html>

```

👉 검색창에 입력하고 "구글 검색"을 누르면 **진짜 구글에서 검색됨!**

---

## 🎁 8. 요약 정리

| 용어 | 뜻 | 예 |
| --- | --- | --- |
| `form` | 입력값을 감싸는 봉투 | `<form>...</form>` |
| `action` | 보낼 주소 | `/login`, `/signup` |
| `method` | 보낼 방식 | `GET`, `POST` |
| `submit` | 전송 버튼 | `<button type="submit">` |

---