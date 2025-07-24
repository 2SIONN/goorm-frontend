# Transitions & Animations

날짜: 2025년 7월 14일

> HTML 요소에 부드러운 변화나 복잡한 움직임을 주기 위한 두 가지 CSS 기능
> 

---

## ✅ 1. `transition` — 속성의 변화만 부드럽게

### 🔍 개념

- 요소의 속성이 바뀔 때, 그 **변화 과정을 부드럽게 처리**
- 마우스를 올리거나, 포커스하거나, 클래스를 바꾸는 등의 **상태 변화**에 유용

---

### 🧱 기본 문법

```css
selector {
  transition: [속성] [지속시간] [타이밍함수] [지연시간];
}

```

예시:

```css
button {
  background-color: blue;
  transition: background-color 0.5s ease;
}

button:hover {
  background-color: red;
}

```

> 마우스를 올리면 파란색 → 빨간색으로 부드럽게 변화
> 

---

### 🧩 transition 관련 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `transition-property` | 대상 속성 | `opacity`, `transform`, `background-color` |
| `transition-duration` | 애니메이션 시간 | `0.3s`, `1s` |
| `transition-timing-function` | 속도 곡선 | `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out` |
| `transition-delay` | 대기 시간 | `0s`, `0.5s` |

---

## ✅ 2. `animation` — 복잡한 키프레임 움직임

### 🔍 개념

- 시간의 흐름에 따른 **단계별 상태 변화**를 만들 수 있음
- 반복 가능, 자동 시작 가능

---

### 🧱 기본 문법

```css
selector {
  animation: [이름] [지속시간] [타이밍함수] [지연시간] [반복횟수] [방향] [정지모드];
}

```

---

### ✏️ @keyframes 예시

```css
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-50px); }
  100% { transform: translateY(0); }
}

.ball {
  animation: bounce 1s ease-in-out infinite;
}

```

> 공이 위아래로 튕기는 반복 애니메이션
> 

---

### 🧩 animation 관련 속성

| 속성 | 설명 | 예시 |
| --- | --- | --- |
| `animation-name` | 사용할 keyframes 이름 | `bounce` |
| `animation-duration` | 지속 시간 | `2s` |
| `animation-timing-function` | 타이밍 함수 | `ease`, `linear`, `steps(3)` 등 |
| `animation-delay` | 지연 시간 | `0.3s` |
| `animation-iteration-count` | 반복 횟수 | `1`, `infinite` |
| `animation-direction` | 방향 | `normal`, `reverse`, `alternate` |
| `animation-fill-mode` | 정지 모드 | `none`, `forwards`, `backwards`, `both` |

---

## ⚖️ 차이점 비교

| 항목 | `transition` | `animation` |
| --- | --- | --- |
| 실행 조건 | 속성이 변경될 때만 작동 | 자동 실행 또는 트리거 가능 |
| 정의 방식 | 시작과 끝만 정의 | 여러 단계(`@keyframes`) 정의 가능 |
| 반복 | ❌ 안 됨 | ✅ 가능 (infinite 등) |
| 정교한 동작 | ❌ 어려움 | ✅ 가능 |
| 주 용도 | hover, focus 등 상태 변화 | 반복, 복잡한 움직임, 로딩 효과 등 |

---

## 🎯 주요 타이밍 함수 종류

| 값 | 설명 | 특징 |
| --- | --- | --- |
| `ease` | 느리게 시작 → 빠르게 중간 → 느리게 끝 | ✅ 기본값 |
| `linear` | 일정한 속도로 진행 | 속도 변화 없음 |
| `ease-in` | 느리게 시작, 점점 빨라짐 | 가속만 존재 |
| `ease-out` | 빠르게 시작, 느리게 끝남 | 감속만 존재 |
| `ease-in-out` | 느리게 시작 → 빠르게 → 다시 느리게 끝 | 부드러운 전환 |

---

### 📈 시각적 흐름 비교

```
ease         →    ─────╮    완만 → 빠름 → 완만
linear       →    ──────    일정한 속도
ease-in      →    ╭─────    점점 가속
ease-out     →    ─────╯    점점 감속
ease-in-out  →    ╭───╮     양쪽 천천히, 중간 빠르게

```

---

### 🧠 고급: `cubic-bezier(n,n,n,n)`

```css
transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);

```

- 직접 **속도 곡선**을 커스터마이징 가능
- 네 개의 값은 **제어점의 x, y 좌표 (0 ~ 1)**
- 예시 툴: [https://cubic-bezier.com](https://cubic-bezier.com/)

---

## 🎯 속성값 설명

| 값 | 설명 | 방향 | 특징 |
| --- | --- | --- | --- |
| `normal` | 애니메이션을 **정방향(처음 → 끝)** 으로 재생 | ▶ | ✅ 기본값 |
| `reverse` | 애니메이션을 **역방향(끝 → 처음)** 으로 재생 | ◀ | 처음에 끝 상태부터 시작 |
| `alternate` | 한 번은 정방향 ▶, 다음은 역방향 ◀ | ▶◀▶◀ | 반복 시 반대로 전환 |
| `alternate-reverse` | 한 번은 역방향 ◀, 다음은 정방향 ▶ | ◀▶◀▶ | `alternate`의 반대 순서 |

---

### 📽️ 흐름 비교 예시

| 속성 | 반복 시 애니메이션 방향 |
| --- | --- |
| `normal` | ▶ ▶ ▶ ▶ |
| `reverse` | ◀ ◀ ◀ ◀ |
| `alternate` | ▶ ◀ ▶ ◀ |
| `alternate-reverse` | ◀ ▶ ◀ ▶ |

---

## ✅ 정리 요약

| 항목 | `transition` | `animation` |
| --- | --- | --- |
| 실행 조건 | 속성 변화 발생 시 | 자동 또는 수동 |
| 복잡도 | 단순 | 정교한 설계 가능 |
| 반복 | ❌ | ✅ |
| 대표 사용 예 | 버튼 hover 효과 | 로딩, 슬라이더, 캐릭터 움직임 등 |

---

## 💻 실전 예제

```jsx
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s linear 1s;
}

div:hover {
  width: 300px;
}
</style>
</head>
<body>

<h1>CSS 트랜지션</h1>

<p>마우스 오버 시 실행</p>

<div></div>

</body>
</html>

```

```jsx
<!DOCTYPE html>
<html>
<head>
<style> 
div {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation: myfirst 5s linear 2s infinite alternate;
}

@keyframes myfirst {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
</style>
</head>
<body>

<h1>CSS 애니메이션</h1>
<div></div>

</body>
</html>
```