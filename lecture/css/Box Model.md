# Box Model

날짜: 2025년 7월 10일
중요도: 높음

# Box Model

> HTML 요소는 화면에 표시될 때 **박스 형태(Box Model)**로 만들어져요.
> 
> 
> 이 박스는 **4겹의 층**으로 이루어져 있어요.
> 

---

## 🧱 Box Model 구조

```
┌──────────────────────────────┐  ← margin (바깥 여백)
│  ┌────────────────────────┐ │  ← border (테두리)
│  │  ┌────────────────────┐ │ │  ← padding (안쪽 여백)
│  │  │   content (내용)   │ │ │  ← 실제 텍스트, 이미지 등
│  │  └────────────────────┘ │ │
│  └────────────────────────┘ │
└──────────────────────────────┘

```

---

## 📘 각 구성 요소 설명

| 구성 요소 | 설명 | 예시 |
| --- | --- | --- |
| `content` | 텍스트, 이미지 등 실제 내용 | `width`, `height`로 크기 조절 |
| `padding` | content와 border 사이의 내부 여백 | `padding: 20px` |
| `border` | padding과 margin 사이의 테두리 | `border: 1px solid black` |
| `margin` | 요소 바깥의 여백 (다른 요소와의 거리) | `margin: 10px` |

---

## 💡 실제 예제

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}

```

📏 총 크기 계산 (기본 box-sizing: content-box):

- 가로: 200 (content) + 20*2 (padding) + 5*2 (border) = **250px**
- 세로: 100 + 40 + 10 = **150px**
- **margin은 바깥 여백이므로 별도**

---

## ⚙️ box-sizing 속성

### 🔸 기본값: `content-box`

- `width`, `height`는 **content 영역만 포함**
- padding과 border는 별도로 더해짐

### 🔹 권장값: `border-box`

- `width`, `height`에 **padding과 border 포함**
- 실무에서 **계산이 쉬워서 매우 많이 사용**

```css
* {
  box-sizing: border-box;
}

```

---

## 🧪 비교: content-box vs border-box

| 속성 | content-box (기본값) | border-box (추천!) |
| --- | --- | --- |
| 크기 기준 | content만 포함 | 전체 박스 크기에 포함 |
| 계산 방식 | width + padding + border | width 안에 다 포함됨 |
| 유지보수 | 계산 복잡 | 계산 쉬움 |

---

## 🌐 브라우저 실습 코드 예시

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Box Model 예제</title>
  <style>
    .box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 5px solid blue;
      margin: 15px;
      background-color: lightyellow;
    }

    .border-box {
      box-sizing: border-box;
    }

    .content-box {
      box-sizing: content-box;
    }
  </style>
</head>
<body>
  <h2>border-box (추천)</h2>
  <div class="box border-box">나는 border-box</div>

  <h2>content-box (기본값)</h2>
  <div class="box content-box">나는 content-box</div>
</body>
</html>

```

---

## ✅ 요약

| 항목 | 설명 |
| --- | --- |
| content | 실제 내용 |
| padding | 내부 여백 (content와 border 사이) |
| border | 박스 테두리 |
| margin | 외부 여백 (다른 요소와의 거리) |
| box-sizing | 박스 크기 계산 기준 설정 (border-box 추천!) |

---

## 🧠 기억 꿀팁

> box-sizing: border-box로 설정하면 디자인 레이아웃이 계산하기 훨씬 쉬워짐!
> 
> 
> 대부분의 CSS 초기화 코드에도 포함돼요:
> 

```css
* {
  box-sizing: border-box;
}

```