# HTML/CSS 출력 과정

날짜: 2025년 7월 16일

웹 브라우저가 HTML/CSS를 해석해서 화면에 출력하는 과정을 **렌더링 파이프라인(Rendering Pipeline)**이라고 합니다.

참고링크

- https://developer.chrome.com/docs/chromium/renderingng-architecture?hl=ko
- https://d2.naver.com/helloworld/59361

---

## 🍭 전체 과정
1. **HTML 파싱 → DOM 생성**
2. **CSS 파싱 → CSSOM 생성**
3. **DOM + CSSOM → 렌더 트리(Render Tree) 생성**
4. **레이아웃(Layout / Reflow)**: 위치와 크기 계산
5. **페인트(Paint)**: 실제 픽셀로 그리기
6. **합성(Compositing)**: 레이어 조합 후 화면 표시

---

## 📖 단계별 상세 설명

### 1️⃣ HTML 파싱 → DOM 트리 생성

- HTML 코드를 읽어 **DOM(Document Object Model) 트리** 생성
- HTML 태그들이 노드 형태로 연결된 트리 구조

```html
<body>
  <h1>제목</h1>
  <p>본문 내용</p>
</body>

```

```
Document
└── html
    └── body
        ├── h1
        └── p

```

---

### 2️⃣ CSS 파싱 → CSSOM 트리 생성

- CSS 코드를 읽어서 **CSSOM(CSS Object Model) 트리** 생성
- 각 요소에 적용할 스타일 정보를 노드 형태로 저장

```css
h1 { color: red; font-size: 24px; }
p  { color: black; }

```

---

### 3️⃣ DOM + CSSOM 결합 → 렌더 트리(Render Tree) 생성

- DOM과 CSSOM을 결합하여 실제로 화면에 출력할 **렌더 트리** 생성
- 렌더 트리에는 스타일이 적용된 요소들만 포함됨

---

### 4️⃣ 레이아웃 (Layout / Reflow)

- 렌더 트리를 기반으로 **각 요소의 위치와 크기**를 계산
- 이 과정을 **Reflow** 또는 **Layout 단계**라고 함

---

### 5️⃣ 페인트(Paint)

- 스타일 속성(색상, 글꼴, 테두리 등)을 실제 **픽셀로 그리기**
- 요소의 시각적 표현을 브라우저에 렌더링

---

### 6️⃣ 합성(Compositing)

- 페인트된 여러 레이어들을 **조합**하여 최종 화면을 완성
- 애니메이션이나 스크롤 처리 시 레이어를 재조합

---

## 🚀 성능 최적화 관련

- **Reflow(레이아웃 재계산)** 발생 최소화가 중요
- 자주 변하지 않는 요소는 **합성 레이어 분리**로 성능 향상
- 애니메이션은 **transform**과 **opacity** 속성 사용 시 GPU 가속으로 부드럽게 처리

---

## 📌 브라우저 렌더링 파이프라인 요약

| 단계 | 설명 |
| --- | --- |
| HTML 파싱 | DOM 트리 생성 |
| CSS 파싱 | CSSOM 트리 생성 |
| 렌더 트리 생성 | DOM + CSSOM 결합 |
| 레이아웃 | 위치/크기 계산 (Reflow) |
| 페인트 | 실제로 화면에 그리기 |
| 합성 | 최종 화면 표시 |

---

## ✅ 결론

웹 브라우저는 다음과 같은 순서로 작동합니다:

> HTML로 구조 생성 → CSS로 디자인 적용 → 렌더 트리 생성 → 레이아웃 계산 → 화면에 그리기
> 

이 과정을 통해 우리가 작성한 HTML/CSS 코드는

실제로 사용자의 화면에 보이는 웹페이지로 만들어집니다. 🚀