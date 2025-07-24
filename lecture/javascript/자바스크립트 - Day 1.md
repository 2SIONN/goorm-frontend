# 자바스크립트 - Day 1

날짜: 2025년 7월 23일

# 📘 Web APIs와 DOM

---

## 1️⃣ Web APIs란?

웹 브라우저는 단순히 HTML과 CSS를 보여주는 프로그램이 아닙니다. 브라우저는 자바스크립트 코드를 실행시킬 수 있는 환경이며, 그 안에는 웹 개발자가 사용할 수 있도록 다양한 기능을 제공합니다. 이 기능들을 **Web APIs**라고 부릅니다.

**Web APIs**는 자바스크립트 코드가 브라우저와 상호작용할 수 있도록 만들어진 "기능 모음"입니다.

대표적인 Web APIs 예시:

- **DOM API** : 웹 페이지 내용을 읽고 수정할 수 있게 해주는 API
- **Events API** : 사용자 입력을 감지하고 반응할 수 있게 해주는 API
- **Fetch API** : 서버에서 데이터를 가져오는 API

이러한 Web APIs 덕분에 자바스크립트는 웹페이지를 동적으로 만들 수 있습니다.

---

## 2️⃣ Document 객체와 Element 객체

### ✅ Document 객체

웹 페이지의 전체 HTML 문서를 하나의 큰 객체로 만든 것입니다. 브라우저는 HTML 문서를 **Document 객체**로 해석하여 프로그래머가 코드로 접근할 수 있게 해줍니다.

Document 객체로 할 수 있는 일:

- 웹 페이지 전체 구조를 탐색할 수 있다.
- 페이지 안의 특정 요소(Element)를 찾을 수 있다.
- 새로운 요소를 만들거나 삭제할 수 있다.

### ✅ Element 객체

HTML에서 각각의 태그는 브라우저에서 하나의 **Element 객체**로 다뤄집니다.

예시:

- `<h1>` 태그 → 하나의 Element 객체
- `<button>` 태그 → 하나의 Element 객체

이렇게 각각의 HTML 요소는 모두 자바스크립트 코드에서 객체로 존재하게 됩니다.

## 차이

| 객체 | 의미 |
| --- | --- |
| Document | 전체 HTML 문서 |
| Element | 문서 안의 개별 요소들 |

---

## 3️⃣ DOM 접근 메서드 정리

웹페이지의 HTML 요소를 자바스크립트 코드로 선택하는 방법입니다.

| 메서드 | 설명 |
| --- | --- |
| `getElementById(id)` | id로 요소 하나 선택 |
| `getElementsByClassName(name)` | class 이름으로 여러 요소 선택 (컬렉션) |
| `getElementsByName(name)` | name 속성으로 여러 요소 선택 |
| `getElementsByTagName(tag)` | 태그 이름으로 여러 요소 선택 |
| `getElementsByTagNameNS()` | 네임스페이스+태그 이름으로 요소 선택 |
| `querySelector(selector)` | CSS 선택자처럼 요소 하나 선택 |
| `querySelectorAll(selector)` | CSS 선택자처럼 여러 요소 선택 (NodeList) |

이 방법들을 활용하면 페이지 안의 원하는 요소를 자유롭게 찾고 수정할 수 있습니다.

---

## 4️⃣ Events와 addEventListener()

웹페이지는 단순히 내용을 보여주는 것에 그치지 않고, 사용자의 행동(클릭, 스크롤 등)에 반응해야 합니다. 이때 사용하는 것이 바로 **이벤트(Event)**입니다.

**이벤트란?**

- 사용자의 행동을 감지하고 반응할 수 있는 기능

**대표적인 이벤트 예시**

- click : 클릭했을 때 발생
- scroll : 스크롤했을 때 발생

**이벤트를 사용하기 위한 공식적인 방법** → `addEventListener()`

```jsx
element.addEventListener("이벤트이름", 이벤트가발생했을때할일);

```

예시:

```jsx
const button = document.getElementById("myBtn");
button.addEventListener("click", function() {
  alert("버튼이 클릭되었습니다!");
});
```

---

## 5️⃣ Element.classList Property

`Element.classList`는 HTML 요소의 클래스 속성을 **배열처럼 쉽게 관리**할 수 있는 **DOMTokenList 객체**입니다.

문자열로 관리하던 class 속성을 **토큰 단위**로 조작할 수 있게 해줍니다.

---

### ✅ 특징

| 항목 | 설명 |
| --- | --- |
| 타입 | DOMTokenList 객체 |
| 사용 대상 | 모든 DOM 요소 (Element 하위 객체) |
| 주요 메서드 | add(), remove(), toggle(), contains(), replace() |

### ✅ 주요 메서드 및 사용법

```jsx
const element = document.querySelector('div');

element.classList.add('active');            // 클래스 추가
element.classList.remove('hidden');         // 클래스 제거
element.classList.toggle('selected');       // 토글 (있으면 제거, 없으면 추가)
element.classList.contains('highlighted');  // 포함 여부 확인 (true / false)
element.classList.replace('old', 'new');    // 클래스 교체

```

---

## 6️⃣ HTMLElement.style Property

> https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
> 

### ✅ 기본 형식

- 해당 요소의 인라인 스타일을 조작합니다.
- **CSS 속성명**을 **camelCase** 형태로 사용합니다.

```jsx
element.style.propertyName = '값';
const 값 = element.style.propertyName;
```

### ✅ CSS 속성명 → JavaScript 프로퍼티 변환

| CSS 속성 | JavaScript 프로퍼티 |
| --- | --- |
| background-color | element.style.backgroundColor |
| font-size | element.style.fontSize |
| margin-top | element.style.marginTop |

### ✅ 자주 사용하는 스타일 설정 예시

```jsx
button.style.display = 'none';            // 버튼 숨기기
menu.style.position = 'fixed';            // 메뉴 고정
modal.style.zIndex = '1000';              // 모달을 최상단으로
element.style.transform = 'scale(1.2)';   // 크기 확대
element.style.opacity = '0.5';            // 투명도 조절
```

---

## 🎮 실습 코드 예시

### 📌 클릭 이벤트 실습

```jsx
<button id="menu-btn">메뉴 열기/닫기</button>
<nav id="menu" style="display: none;">
  <ul>
    <li>홈</li>
    <li>서비스</li>
    <li>문의하기</li>
  </ul>
</nav>

<script>
  const menuBtn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  menuBtn.addEventListener('click', () => {
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
    console.log('메뉴 상태:', isVisible ? '닫힘' : '열림');
  });
</script>

```

### 📌 스크롤 이벤트 실습

```jsx
<header id="page-header" style="height: 50px; background: lightgray;">헤더</header>
<div style="height: 2000px;"></div> <!-- 스크롤 공간 확보 -->

<script>
  const header = document.querySelector('#page-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'tomato';
    } else {
      header.style.backgroundColor = 'lightgray';
    }
    console.log('스크롤 위치:', window.scrollY);
  });
</script>

```

### 📌 모달 팝업

```html
<style>
    /* 모달 스타일 */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      justify-content: center;
      align-items: center;
    }

    .modal-content {
      background: white;
      padding: 20px;
      border-radius: 8px;
      min-width: 200px;
    }
</style>

<!-- 모달 버튼 -->
<button id="open-modal-btn">모달 열기</button>

<!-- 모달 팝업 -->
<div class="modal" id="modal">
  <div class="modal-content">
    <p>이것은 모달 팝업입니다.</p>
    <button id="close-modal-btn">닫기</button>
  </div>
</div>

<script>
    // 모달 열기/닫기
    const modal = document.getElementById('modal');
    document.getElementById('open-modal-btn').addEventListener('click', () => {
      modal.style.display = 'flex';
    });
    document.getElementById('close-modal-btn').addEventListener('click', () => {
      modal.style.display = 'none';
    });
</script>

```

### 📌 반응형 탭

```html
<style>
    /* 탭 컨테이너 */
    .tabs-container {
      overflow-x: auto;
      white-space: nowrap;
      border-bottom: 2px solid #ddd;
    }

    .tab-item {
      display: inline-block;
      padding: 10px 20px;
      margin: 5px;
      background: #eee;
      border-radius: 20px;
      cursor: pointer;
      white-space: nowrap;
    }

    .tab-item.active {
      background: tomato;
      color: white;
    }
</style>

<!-- 가로 스크롤 탭 -->
<div class="tabs-container" id="tabs">
  <div>탭 1</div>
  ...
  <div>탭 20</div>
</div>

<!-- 탭 내용 -->
<div id="tab-content" style="margin-top:20px;"></div>

<script>
		const tabsContainer = document.getElementById('tabs');
    const tabContent = document.getElementById('tab-content');
    
    // 탭 클릭 이벤트
    tabsContainer.addEventListener('click', (e) => {
		  const clickedTab = e.target;
		
		  // 기존 활성 탭 비활성화
		  const currentActive = tabsContainer.querySelector('.tab-item.active');
		  if (currentActive) currentActive.classList.remove('active');
		
		  // 새 탭 활성화
		  clickedTab.classList.add('active');
		
		  // 가로 중앙 스크롤 이동
		  const containerRect = tabsContainer.getBoundingClientRect();
		  const tabRect = clickedTab.getBoundingClientRect();
		  const offset = tabRect.left - containerRect.left - (containerRect.width / 2) + (tabRect.width / 2);
		
		  tabsContainer.scrollBy({ left: offset, behavior: 'smooth' });
		
		  // 콘텐츠 업데이트
		  tabContent.textContent = `${clickedTab.textContent} 클릭됨`;
		});

</script>

```