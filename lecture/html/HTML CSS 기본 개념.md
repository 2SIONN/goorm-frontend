# HTML/CSS 기본 개념

날짜: 2025년 7월 9일
중요도: 높음

# 📘 HTML & CSS 기초

## 1. HTML & CSS 소개

### 🔹 HTML (HyperText Markup Language)

- **HyperText**: 하이퍼링크를 통해 문서 간 연결이 가능한 텍스트
- **Markup**: 태그를 이용해 구조를 표현
- **Markup Language**: 문서 구조를 표현하는 태그 체계

### 🔹 CSS (Cascading Style Sheets)

- **역할**: 웹사이트의 시각적 표현 담당 (HTML은 구조, CSS는 디자인)
- **특징**: HTML 구조는 그대로 두고 CSS만 바꿔도 완전히 다른 디자인 구현 가능

---

## 2. HTML 기본 태그 구조

```html
<p></p>  <!-- 문단 태그 -->

```

- `< >`: 열기 태그
- `</ >`: 닫기 태그
- `<img>` 또는 `<img />`: 단독 태그
- 속성 예시:
    
    ```html
    <p class="paragraph">내용</p>
    
    ```
    

---

## 3. HTML 문서 기본 구조

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <title>사이트 제목</title>
</head>
<body>
  <div id="wrap">
    <div id="header">
      <h1>페이지 제목</h1>
    </div>
    <div id="content">
      <h2>콘텐츠 제목</h2>
      <div id="article">
        <h3>글제목</h3>
      </div>
      <div id="aside">
        <h3>사이드 제목</h3>
      </div>
    </div>
    <div id="footer"></div>
  </div>
</body>
</html>

```

---

## 4. 주요 HTML 요소 소개

### 📌 텍스트 및 레이아웃 관련 태그

- 제목 태그: `<h1>` ~ `<h6>`
- 단락: `<p>`, 줄: `<br>`, 강조: `<strong>`, `<em>`, 작게: `<small>`
- 레이아웃: `<div>`, `<span>`

### 📌 링크/이미지/목록/테이블

- 링크: `<a>`
- 이미지: `<img>`
- 목록: `<ul>`, `<ol>`, `<li>`
- 정의 목록: `<dl>`, `<dt>`, `<dd>`
- 표 관련: `<table>`, `<caption>`, `<colgroup>`, `<col>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`

### 📌 폼 관련 요소

- `<form>`, `<fieldset>`, `<legend>`
- 입력 필드:
    - `<input type="text">`
    - `<input type="password">`
    - `<input type="checkbox">`
    - `<input type="radio">`
    - `<input type="submit">`
    - `<input type="button">`
- 기타: `<label>`, `<textarea>`, `<select>`, `<option>`, `<button>`

---

## 5. HTML 문서 예제 (본문 구조 예시)

```html
<html>
<head></head>
<body>
  <h1>메인 제목</h1>
  <p>전체 페이지를 소개하는 내용을 작성한다. 메인 제목이 긴 경우에는 여러 개의 부 제목으로 나눈다.</p>

  <h2>첫 번째 부 제목</h2>
  <p>긴 기사의 경우 대부분 부 제목을 작성한다. 경우에 따라서는 부 부 제목(부 제목의 부 제목)을 작성하기도 한다.</p>

  <h2>두 번째 부 제목</h2>
  <p>두 번째 부 제목 부분이다.</p>
</body>
</html>

```

---