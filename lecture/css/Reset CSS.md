# Reset CSS

날짜: 2025년 7월 16일

**Reset CSS**는 브라우저가 기본으로 적용하는 스타일을 제거해

웹페이지의 스타일을 **초기화**하는 CSS 코드입니다.

---

## 📌 왜 Reset CSS가 필요할까?

| 원인 | 문제 |
| --- | --- |
| 브라우저마다 다른 기본 스타일 | 같은 HTML도 다르게 보임 |
| 기본 margin/padding 존재 | 원치 않는 여백 발생 |
| 리스트/헤더 등 불일치 | 스타일 통일 불가 |

브라우저 간 디자인 차이를 없애기 위해

모든 스타일을 통일된 상태로 초기화합니다.

---

## ✅ Reset CSS 코드 예시

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: sans-serif;
  font-size: 16px;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: none;
  background: none;
  font: inherit;
}

```

---

## 📚 유명한 Reset CSS 종류

| 종류 | 특징 |
| --- | --- |
| Eric Meyer's Reset | 전통적인 완전 초기화 |
| Normalize.css | 스타일을 제거하지 않고 통일 |
| Modern Reset CSS | 최신 브라우저에 맞춘 간결한 초기화 |

---

## ✅ 최신 Modern Reset CSS (추천)

```css
/* 최신 reset */
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

body {
  min-height: 100vh;
  line-height: 1.5;
  font-family: system-ui, sans-serif;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

ul, ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

```

---

웹 개발을 시작할 때 **Reset CSS**를 적용하면

브라우저 간 스타일 불일치 문제를 사전에 해결할 수 있습니다. 🚀