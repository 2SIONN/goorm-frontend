# Flex, Grid, Position

날짜: 2025년 7월 11일

# ✅ 1. Flexbox (`display: flex`)

- 요소들을 **가로 또는 세로로 정렬**할 때 사용
- 부모 요소에 `display: flex`를 주면 자식 요소가 줄 정렬됨

### 주요 속성

| 속성 | 의미 |
| --- | --- |
| `flex-direction` | row (가로), column (세로) |
| `justify-content` | 가로 정렬 방식 (center, space-between 등) |
| `align-items` | 세로 정렬 방식 (center, flex-start 등) |

### 예제

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

```

---

## ✅ 2. Grid Layout (`display: grid`)

- **행과 열을 동시에** 제어하는 강력한 레이아웃
- 부모 요소에 `display: grid` 설정

### 주요 속성

| 속성 | 설명 |
| --- | --- |
| `grid-template-columns` | 열 너비 지정 (ex. `1fr 1fr`) |
| `grid-template-rows` | 행 높이 지정 |
| `gap` | 칸 사이 간격 |

### 예제

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

```

---

## ✅ 3. Position (`position`)

- 요소의 위치를 **정확하게 조절**할 수 있음

### 주요 값

| 값 | 설명 |
| --- | --- |
| `static` | 기본 위치 (설정 안 됨) |
| `relative` | 자기 원래 위치 기준으로 이동 |
| `absolute` | 부모 기준으로 고정 위치 |
| `fixed` | 화면 기준 고정 위치 |
| `sticky` | 스크롤 시 고정/해제 |

### 예제

```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}

```

---

## 🎯 요약 비교표

| 레이아웃 | 목적 | 특징 |
| --- | --- | --- |
| `flex` | 1차원 정렬 | 한 줄/한 열 정렬에 최적 |
| `grid` | 2차원 정렬 | 행과 열을 동시에 정렬 |
| `position` | 위치 고정 | 자유도 높지만 조심해야 함 |

---

## 🧠 팁

- Flex는 메뉴, 버튼 등 줄 정렬에 유리
- Grid는 전체 레이아웃, 카드 정렬에 적합
- Position은 툴팁, 팝업, 고정 메뉴에 자주 사용