# CSS W3C 공식 개요

날짜: 2025년 7월 15일

**W3C CSS 공식 문서**는 CSS의 정의, 역할, 발전 방향을 설명하는 페이지입니다.

CSS는 **웹 페이지의 디자인과 레이아웃**을 지정하기 위한 표준 스타일 언어입니다.

공식 문서: [https://www.w3.org/Style/CSS/Overview.en.html](https://www.w3.org/Style/CSS/Overview.en.html)

---

## 📖 W3C CSS 공식 문서 주요 내용

### CSS의 발전

- **CSS1 (1996)** : 최초의 CSS 표준
- **CSS2 (1998)** : 미디어 타입, 포지셔닝 등 지원
- **CSS3 (2011~)** : 모듈화 → 점진적 표준화 진행 중

### CSS 모듈화

- 최신 CSS는 여러 **모듈**로 나누어 개발 중입니다.
- 예시:
    - Selectors
    - Backgrounds and Borders
    - Animations
    - Flexbox
    - Grid Layout
    - Media Queries

---

## 🎨 최근 업데이트된 CSS

---

### 🖼️ 1. Container Queries (컨테이너 기반 반응형)

- **설명**: 요소 부모 컨테이너의 크기에 따라 자식 스타일을 조정
- **예시**:

```css
.card {
  container-type: inline-size;
}
@container (min-width: 30em) {
  .card { display: flex; }
}

```

- **효과**: 구성요소 단위의 반응형 스타일 가능 :contentReference[oaicite:2]{index=2}

---

### 🎨 2. New Color Tools (색상 혼합 & 색 공간)

- **`color-mix()`**: 브라우저 내에서 색상 혼합 가능 :contentReference[oaicite:3]{index=3}
- **HWB/LCH/LAB**: 더 직관적인 색 공간 모델 도입 :contentReference[oaicite:4]{index=4}

---

### 📐 3. CSS Nesting (중첩 규칙)

- **설명**: Sass처럼 스타일을 중첩하여 가독성↑ :contentReference[oaicite:5]{index=5}
- **예시**:

```css
.card {
  &:hover { background: lightgray; }
}

```

---

### 🧩 4. Cascade Layers (`@layer`)

- **설명**: 스타일 우선순위 관리 단순화 :contentReference[oaicite:6]{index=6}
- **예시**:

```css
@layer components {
  .btn { /* 기본 버튼 스타일 */ }
}

```

---

### 🔍 5. Scoped Styles (`@scope`)

- **설명**: 특정 컨테이너 범위 내에서만 스타일 적용 :contentReference[oaicite:7]{index=7}
- **예시**:

```css
@scope (.card) {
  .title { color: blue; }
}

```

---

### 🔣 6. Individual Transform Properties

- **설명**: `translate`, `rotate`, `scale` 등 개별 속성 지정 가능 :contentReference[oaicite:8]{index=8}
- **예시**:

```css
.box { translate: 50px 0; rotate: 30deg; }

```

---

### 🔄 7. Scroll-driven Animations

- **설명**: 스크롤 위치에 따른 CSS 애니메이션 제어 :contentReference[oaicite:9]{index=9}
- **예시**:

```css
img {
  animation: fadeIn linear;
  animation-timeline: view();
}

```

---

### 🔢 8. Trigonometric Functions (삼각 함수)

- **설명**: `sin()`, `cos()`, `tan()` 등으로 레이아웃 애니메이션 가능 :contentReference[oaicite:10]{index=10}
- **활용예시**: 원형 메뉴, 동그라미 배치 등

---

### ⌛ 9. View Transitions (뷰 전환 애니메이션)

- **설명**: 페이지 간 자연스러운 전환을 위한 API
- **상태**: CSS Snapshot 2023부터 안정권 :contentReference[oaicite:11]{index=11}

---

### ✅ 10. 강력해진 선택자 `:has()`, `:is()`

- **`:has()` 함수**: 자식 조건 기반 역방향 선택자 :contentReference[oaicite:12]{index=12}
- **`:is()` + `:where()`**: 복잡한 선택자 작성 간소화

---

### 📐 11. Individual Viewport Units & Dynamic Viewport

- **설명**: 가변 화면 단위(`lvh`, `svh` 등) 지원
- **용도**: 모바일 브라우저 UI 대응 반응형 디자인 :contentReference[oaicite:13]{index=13}

---

### 📏 12. Subgrid 지원 확대

- **설명**: 그리드 안의 하위 그리드가 부모 구조에 동기화 가능
- **상태**: 점진적 브라우저 지원 중 :contentReference[oaicite:14]{index=14}

---

## 🌐 CSS 공식 리소스

- [CSS 공식 홈페이지](https://www.w3.org/Style/CSS/)
- [CSS 사양 목록](https://www.w3.org/Style/CSS/current-work)
- [CSS 모듈](https://www.w3.org/TR/css-2022/)