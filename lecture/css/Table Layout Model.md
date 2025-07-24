# Table Layout Model

날짜: 2025년 7월 10일
중요도: 높음

> HTML <table> 요소가 브라우저에서 어떻게 배치(layout) 되는지 정의한 모델
> 
> 
> 특히 **열 너비 계산 방식**에 큰 영향을 줌
> 

---

## 🧱 기본 table 구조

```
<table>
  ├── <caption>     (표 제목)
  ├── <colgroup>    (열 그룹)
  ├── <thead>       (머리 행)
  ├── <tbody>       (본문 행)
  └── <tfoot>       (꼬리 행)
       └── <tr>     (행)
            └── <td> or <th> (셀)

```

---

## ⚙️ 핵심 속성: `table-layout`

```css
table {
  table-layout: auto;   /* 기본값 */
  /* 또는 */
  table-layout: fixed;
}

```

---

## 🔄 `table-layout: auto` (기본값)

- **모든 셀의 내용**을 확인해서 **열 너비 자동 계산**
- 내용이 길수록 열이 넓어짐
- 렌더링 속도가 느릴 수 있음

### ✅ 특징

| 항목 | 설명 |
| --- | --- |
| 열 너비 | 내용에 따라 자동 계산 |
| 속도 | 느림 (내용 스캔 필요) |
| 텍스트 넘침 | 셀 너비가 자동으로 확장됨 |

### 💡 예시

```html
<table style="table-layout: auto; width: 500px;">
  <tr>
    <td>짧은 텍스트</td>
    <td>아주 길고 긴 텍스트가 들어옵니다</td>
  </tr>
</table>

```

---

## ⚙️ `table-layout: fixed`

- **첫 번째 행만 보고 열 너비를 결정**
- 이후엔 **내용과 관계없이 고정된 너비 유지**
- 빠르게 렌더링됨
- 텍스트가 넘칠 경우 줄바꿈 또는 잘림

### ✅ 특징

| 항목 | 설명 |
| --- | --- |
| 열 너비 | 첫 번째 행 기준으로 고정 |
| 속도 | 빠름 |
| 텍스트 넘침 | 줄바꿈되거나 잘림 |

---

# 📚 HTML Table

## ✅ 1. `<colgroup>` / `<col>` — 열 스타일 지정

> 표의 열 전체에 스타일을 적용할 때 사용해요.
> 

### 📘 문법 예시

```html
<table>
  <colgroup>
    <col style="background-color: lightyellow;">
    <col style="background-color: lightblue;">
  </colgroup>
  <tr>
    <td>1열</td>
    <td>2열</td>
  </tr>
</table>

```

🔸 1열은 연노랑, 2열은 연파랑으로 칠해짐

---

## ✅ 2. `colspan`, `rowspan` — 셀 병합

> 셀 하나가 여러 칸을 차지하도록 할 수 있어요.
> 

### 🔹 `colspan`: 열 병합 (가로)

```html
<table border="1">
  <tr>
    <td colspan="2">1열 + 2열 병합</td>
  </tr>
  <tr>
    <td>3열</td>
    <td>4열</td>
  </tr>
</table>

```

➡️ 첫 번째 행이 가로로 2칸 합쳐짐

---

### 🔹 `rowspan`: 행 병합 (세로)

```html
<table border="1">
  <tr>
    <td rowspan="2">1행 + 2행 병합</td>
    <td>오른쪽</td>
  </tr>
  <tr>
    <td>오른쪽 아래</td>
  </tr>
</table>

```

➡️ 첫 번째 열이 세로로 2줄 합쳐짐

---

## ✅ 3. `<thead>`, `<tbody>`, `<tfoot>` — 표 구조 구분

> 표를 머리, 몸통, 꼬리로 나누면 스타일, 스크롤, 구조 처리에 유리해요.
> 

### 📘 예시

```html
<table border="1">
  <thead>
    <tr>
      <th>이름</th>
      <th>점수</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>홍길동</td>
      <td>95</td>
    </tr>
    <tr>
      <td>이몽룡</td>
      <td>88</td>
    </tr>
  </tbody>

  <tfoot>
    <tr>
      <td>총합</td>
      <td>183</td>
    </tr>
  </tfoot>
</table>

```

---

## 🧪 실습 예제 (브라우저에서 테스트 가능)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>고급 테이블 예제</title>
  <style>
    table {
      border-collapse: collapse;
      width: 400px;
    }
    th, td {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
    }
    thead {
      background-color: #eee;
    }
    tfoot {
      background-color: #f8d7da;
    }
    colgroup col:first-child {
      background-color: #d1e7dd;
    }
  </style>
</head>
<body>
  <h2>고급 테이블 예제</h2>
  <table>
    <colgroup>
      <col>
      <col>
    </colgroup>

    <thead>
      <tr>
        <th>이름</th>
        <th>점수</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td rowspan="2">홍길동</td>
        <td>95</td>
      </tr>
      <tr>
        <td>87</td>
      </tr>
      <tr>
        <td colspan="2">비고: 우수</td>
      </tr>
    </tbody>

    <tfoot>
      <tr>
        <td>총합</td>
        <td>182</td>
      </tr>
    </tfoot>
  </table>
</body>
</html>

```

---

## 🎯 실무 팁

| 상황 | 추천 사용 태그 |
| --- | --- |
| 열 전체에 스타일 지정 | `<colgroup>` + `<col>` |
| 헤더/요약 셀 병합 | `colspan`, `rowspan` |
| 머리/몸통/꼬리 구조화 | `<thead>`, `<tbody>`, `<tfoot>` |
| 고정 헤더 테이블 구현 | `<thead>` + CSS/JS 조합 |

---

## ✅ 전체 요약표

| 태그 / 속성 | 기능 |
| --- | --- |
| `<colgroup>` / `<col>` | 열 단위로 스타일 지정 |
| `colspan` | 가로 방향 셀 병합 |
| `rowspan` | 세로 방향 셀 병합 |
| `<thead>` | 표의 머리 영역 |
| `<tbody>` | 표의 본문 영역 |
| `<tfoot>` | 표의 요약/꼬리 영역 |

---

> 🧠 Tip: 구조적으로 잘 짜인 테이블은
> 
> 
> ✅ 시각적 정돈, ✅ 스타일링, ✅ 접근성, ✅ JS 조작에서 모두 유리해요!
>