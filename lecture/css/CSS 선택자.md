# CSS 선택자 총정리

날짜: 2025년 7월 14일

웹 개발자라면 반드시 알아야 할 **CSS 선택자**의 모든 종류를 정리합니다.

선택자, 결합자, 가상 클래스, 가상 요소, 함수형 선택자까지 한눈에!

---

## 🧷 1. 기본 선택자 (기본 요소를 고를 때)

| 선택자 | 설명 | 예시 |
| --- | --- | --- |
| `*` | 전체 요소 선택 | `* { margin: 0; }` |
| `태그` | 태그명 선택 | `p { color: black; }` |
| `.클래스명` | 클래스 선택 | `.title { font-size: 20px; }` |
| `#아이디` | id 속성 선택 | `#header { background: blue; }` |
| `[속성]` | 속성 보유 요소 선택 | `[type="text"] { border: 1px solid #000; }` |

---

## 🧬 2. 결합자 (요소 간의 관계 기반 선택)

| 결합자 | 설명 | 예시 | 의미 |
| --- | --- | --- | --- |
| (스페이스) | 자손 선택자 | `div p` | `div` 내부의 모든 `p` |
| `>` | 자식 선택자 | `div > p` | `div` 바로 아래 자식 `p` |
| `+` | 인접 형제 선택자 | `h1 + p` | `h1` 다음에 오는 `p` |
| `~` | 일반 형제 선택자 | `h1 ~ p` | `h1` 뒤에 나오는 모든 `p` |

---

## 🌀 3. 가상 클래스 선택자 `:pseudo-class`

> 요소의 상태, 위치, 조건에 따라 선택
> 

### 🔹 상호작용 관련

| 선택자 | 설명 | 예시 |
| --- | --- | --- |
| `:hover` | 마우스 올렸을 때 | `button:hover` |
| `:active` | 클릭 상태일 때 | `a:active` |
| `:focus` | 포커스 상태 | `input:focus` |
| `:visited` | 방문한 링크 | `a:visited` |

### 🔹 위치 관련

| 선택자 | 설명 | 예시 |
| --- | --- | --- |
| `:first-child` | 첫 자식 | `li:first-child` |
| `:last-child` | 마지막 자식 | `li:last-child` |
| `:first-of-type` | 같은 태그 중 첫번째 | `p:first-of-type` |
| `:last-of-type` | 같은 태그 중 마지막 | `p:last-of-type` |
| `:nth-child(n)` | n번째 자식 | `li:nth-child(3)` |
| `:nth-of-type(n)` | 같은 태그 중 n번째 | `p:nth-of-type(2)` |
| `:only-child` | 유일한 자식 | `div:only-child` |

### 🔹 상태/조건 관련

| 선택자 | 설명 | 예시 |
| --- | --- | --- |
| `:checked` | 체크된 input | `input:checked` |
| `:disabled` | 비활성화된 요소 | `button:disabled` |
| `:empty` | 내용 없는 요소 | `p:empty` |

---

## 🎭 4. 가상 요소 선택자 `::pseudo-element`

> 요소의 일부 혹은 생성된 가상 콘텐츠 선택
> 

| 선택자 | 설명 | 예시 |
| --- | --- | --- |
| `::before` | 요소 앞에 가상 콘텐츠 | `p::before { content: "👉"; }` |
| `::after` | 요소 뒤에 가상 콘텐츠 | `p::after { content: "✔"; }` |
| `::first-line` | 첫 번째 줄 | `p::first-line { color: red; }` |
| `::first-letter` | 첫 글자 | `p::first-letter { font-size: 200%; }` |
| `::selection` | 드래그한 영역 | `::selection { background: yellow; }` |

> CSS3 이후 표준은 :: (콜론 2개) 사용
> 

---

## 🧠 5. 함수형 선택자 (최신 CSS)

| 선택자 | 설명 | 예시 |
| --- | --- | --- |
| `:is()` | 여러 선택자를 그룹화 | `:is(h1, h2, h3) { margin: 1rem; }` |
| `:not()` | 조건 제외 | `:not(.hidden)` |
| `:where()` | `is()`와 같지만 우선순위 0 | `:where(nav, aside) { padding: 10px; }` |
| `:has()` | 자식 조건으로 부모 선택 | `div:has(img) { border: 2px solid red; }` |

> :has()는 역방향 선택 가능: 부모가 특정 자식을 포함할 경우 선택됨
> 
> 
> ⚠️ 일부 구버전 브라우저에서 미지원될 수 있음 (Firefox 2024부터 지원)
> 

---

## ✅ 전체 요약

| 분류 | 예시 | 설명 |
| --- | --- | --- |
| 기본 선택자 | `p`, `.class`, `#id` | 특정 요소 선택 |
| 결합자 | `div > p`, `h1 + p` | 요소 간 관계 선택 |
| 가상 클래스 | `:hover`, `:nth-child(2)` | 상태나 위치 조건 |
| 가상 요소 | `::before`, `::after` | 가상 콘텐츠 삽입 |
| 함수형 선택자 | `:is()`, `:has()` | 복합 조건 그룹화/부모선택 |