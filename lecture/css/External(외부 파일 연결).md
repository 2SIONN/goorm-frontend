# External(외부 파일 연결)

날짜: 2025년 7월 11일

HTML에서 CSS를 적용하는 방식 중 가장 많이 쓰이고, 실무에서도 필수인 **External 방식**을 배워보자!

---

## 🧭 External 방식이란?

> CSS 코드를 별도의 .css 파일로 저장한 뒤,
> 
> 
> **HTML 파일에서 `<link>` 태그로 불러오는 방식**입니다.
> 

---

## ✅ 왜 External 방식을 사용할까?

| 장점 | 설명 |
| --- | --- |
| 💼 코드 분리 | HTML과 CSS를 따로 관리하니까 깔끔함 |
| 🔁 재사용 | 하나의 CSS 파일을 여러 HTML 파일에서 공유 가능 |
| 🧼 유지보수 | 디자인 수정이 필요할 때 CSS만 수정하면 됨 |
| 🚀 성능 향상 | CSS가 브라우저에 캐시되어 빠르게 로딩됨 |

---

## 📁 파일 구조 예시

```
📁 project-folder
├── index.html
└── style.css

```

---

## ✍️ 1단계: CSS 파일 만들기

**`style.css`**

```css
body {
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

h1 {
  color: royalblue;
}

```

---

## ✍️ 2단계: HTML 파일에 연결하기

**`index.html`**

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>External CSS 예제</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <h1>안녕하세요!</h1>
  <p>이건 외부 CSS를 연결한 예제입니다.</p>
</body>
</html>

```

📌 `<link rel="stylesheet" href="파일경로.css" />`

→ 외부 CSS 파일을 HTML에 연결하는 방법!

---

## ⚠️ 주의할 점

| 주의사항 | 설명 |
| --- | --- |
| `href` 경로 | CSS 파일의 위치가 정확해야 함 (상대경로/절대경로) |
| 파일 확장자 | `.css` 로 저장해야 함 |
| 위치 | `<head>` 안에 넣는 게 가장 안전함 |

---

## ✅ 요약

| 항목 | 내용 |
| --- | --- |
| 방식 | CSS를 `.css` 파일로 분리하고 HTML에서 불러옴 |
| 태그 | `<link rel="stylesheet" href="파일경로.css" />` |
| 위치 | `<head>` 태그 안 |
| 장점 | 코드 정리, 재사용성, 유지보수 편리, 성능 향상 |

---

External 방식은 실무에서도 가장 많이 사용되는 스타일 적용 방식이에요!

반드시 익숙해져야 할 필수 개념이니 예제를 많이 실습해보세요 💪