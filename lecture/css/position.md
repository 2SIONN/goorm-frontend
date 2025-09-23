# position

날짜: 2025년 7월 10일

> 웹페이지에서 요소를 **어디에, 어떻게 배치할지** 정하는 것이 바로 `position` 속성이야.
> 
> 
> 요소가 **어디에 놓일지, 어떤 기준으로 배치될지**를 결정해요.
> 

---

## 🎯 position 속성 값 종류

| 값 | 기준점 | 문서 흐름에 포함? | 스크롤 따라감? | 설명 |
| --- | --- | --- | --- | --- |
| `static` | 없음 | ✅ 포함됨 | ✅ 따라감 | 기본값. 위치 지정 불가 |
| `relative` | 자신의 원래 위치 | ✅ 포함됨 | ✅ 따라감 | 상대 위치 이동 가능 |
| `absolute` | 가장 가까운 `position` 지정 조상 | ❌ 빠짐 | ❌ 고정 | 절대 위치 지정 |
| `fixed` | 브라우저 창 | ❌ 빠짐 | ❌ 고정 | 스크롤 무시하고 고정 |
| `sticky` | 스크롤 위치 (부모 컨테이너 안에서) | ✅ 포함됨 | ⏳ 도중에 고정 | 스크롤 중 고정되는 위치 |

---

## ✅ 1. `static` – 기본값

```css
position: static;

```

- HTML의 기본 배치 방식
- `top`, `left` 등 위치 조절 속성이 **무시**됨

---

## ✅ 2. `relative` – 상대 위치

```css
position: relative;
top: 10px;
left: 20px;

```

- **자기 원래 위치 기준**으로 이동함
- 공간은 그대로 유지됨
- 자식 요소의 `absolute` 기준이 되기도 함

---

## ✅ 3. `absolute` – 절대 위치

```css
position: absolute;
top: 0;
left: 0;

```

- **가장 가까운 `position: relative`, `absolute`, `fixed` 부모** 기준으로 위치함
- 문서 흐름에서 빠져서 다른 요소들과 겹칠 수 있음

---

## ✅ 4. `fixed` – 브라우저 기준 고정

```css
position: fixed;
top: 0;
right: 0;

```

- 브라우저 창을 기준으로 위치 고정
- 스크롤해도 **절대 움직이지 않음**
- 예: 우측 하단 채팅 버튼

---

## ✅ 5. `sticky` – 스크롤 따라오다 고정

```css
position: sticky;
top: 0;

```

- 스크롤하다가 설정한 위치에 도달하면 **고정**
- 다시 위로 스크롤하면 풀림
- 예: 상단 고정 메뉴바

---

## 🧪 실습 예제

```html
<div style="position: relative; width: 200px; height: 200px; background: lightblue;">
  부모 요소
  <div style="position: absolute; top: 10px; left: 10px; background: red; width: 50px; height: 50px;">
    자식 요소
  </div>
</div>

```

- 부모는 `relative`, 자식은 `absolute`
- 자식은 부모를 기준으로 `10px` 만큼 떨어져 있음

---

## ✅ 정리 요약

| 속성 | 의미 | 자주 쓰이는 상황 |
| --- | --- | --- |
| static | 기본 위치 | 따로 위치 조정 안 할 때 |
| relative | 자신의 위치 기준으로 이동 | absolute 자식 기준 잡을 때 |
| absolute | 특정 부모 기준으로 고정 위치 | 메뉴, 툴팁, 모달창 |
| fixed | 브라우저 창 기준 고정 | 채팅 버튼, 스크롤 무시 배너 |
| sticky | 스크롤 시 위치 고정 | 상단 메뉴, 섹션 제목 |