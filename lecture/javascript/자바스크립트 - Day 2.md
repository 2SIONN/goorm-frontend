# 자바스크립트 - Day 2

날짜: 2025년 7월 24일

# 📘 자바스크립트 변수 / 타입 / 연산자

---

## ✅ 1. 변수 선언 방식: `var`, `let`, `const`

- `var`: 과거 방식. 재선언/재할당 가능하나 예측 어려움
- `let` : 블록 스코프의 지역 변수 선언. 선언과 동시에 임의의 값으로 초기화 가능. 재할당 가능.
- `const` : 블록 스코프의 지역 변수 선언. 상수(constant)의 값은 재할당(assignment operator)을 통해 변경 불가. 
하지만 만약 상수가 객체(object)라면, 그 속성(property)은 추가, 수정, 삭제 가능
    
    ```html
    const person = { name: "시온" };
    
    // ❌ 전체 객체 재할당 → 에러 발생
    // person = { name: "수정됨" }; 
    
    // ✅ 속성 수정은 가능
    person.name = "수정됨";      
    
    // ✅ 속성 추가도 가능
    person.age = 20;
    
    // ✅ 속성 삭제도 가능
    delete person.name;
    
    ```
    
- `let`, `const`는 선언 전에 접근 시 `ReferenceError`
    
    ```jsx
    console.log(user); // ❌ ReferenceError
    
    let user = "나현";
    ```
    
- `var`는 undefined 반환
    
    ```jsx
    console.log(count); // undefined
    
    var count = 10;
    ```
    

---

## ✅ 2. 데이터 타입

### 🔹 원시형 (Primitive)

- **값 자체를 저장**
- **불변(immutable)** 데이터
- 종류:
    - `string`
    - `number`
    - `boolean`
    - `undefined`
    - `null`
    - `symbol` : 각각 절대 겹치지 않는 유일한 값을 만들고 싶을 때 사용하는 데이터 타입 (ECMAScript 2020 / ES11)
    - `bigint` : 아주 큰 정수를 정확히 다루기 위해 사용하는 데이터 타입 (ECMAScript 2020 / ES11)

```jsx
let name = "시온";    // string
let age = 38;         // number
let isStudent = true; // boolean
let nothing = null;   // null : 빈 값으로 지정.
let notDefined;       // undefined : 지정 안함
```

### 🔹 참조형 (Reference)

- `object`
- `array`
- `function`

```jsx
let person = { name: "지민", age: 18 }; // 객체
let fruits = ["사과", "바나나"];        // 배열
let sayHi = function() { console.log("안녕!"); }; // 함수
```

## ✅ 3. 연산자

### 1. **산술 연산자 (Arithmetic Operators)**

| 연산자 | 의미 | 예시 | 결과 |
| --- | --- | --- | --- |
| `+` | 더하기 | `5 + 3` | `8` |
| `-` | 빼기 | `5 - 3` | `2` |
| `*` | 곱하기 | `5 * 3` | `15` |
| `/` | 나누기 | `6 / 2` | `3` |
| `%` | 나머지 | `5 % 2` | `1` |
| `++` | 1 증가 | `i++` | `i` 증가 |
| `--` | 1 감소 | `i--` | `i` 감소 |

### 2. **대입 연산자 (Assignment Operators)**

값을 변수에 할당할 때 사용

| 연산자 | 의미 | 예시 |
| --- | --- | --- |
| `=` | 대입 | `x = 10` |
| `+=` | 더하고 대입 | `x += 5` → `x = x + 5` |

```jsx
let bar = 5;
		bar += 2; // 7
```

### 3. 논리 연산자 (Logical Operators)

| 연산자 | 의미 | 예시 | 결과 |
| --- | --- | --- | --- |
| `&&` | AND (그리고) | `true && false` | `false` |
| `||` | OR (또는) | `true || false` | `true` |
| `!` | NOT (부정) | `!true` | `false` |

---

## 🛠 예제

### 💡 1. `let` / `const` 변수로 자기소개 출력

```jsx
const name = "시온";
let age = 28;
let job = "프론트엔드 개발자";

console.log(`안녕하세요. 제 이름은 ${name}이고, 나이는 ${age}살이며, 직업은 ${job}입니다.`);

```

### 💡 2. `typeof`로 다양한 값의 타입 확인

```jsx
console.log(typeof "Hello");       // string
console.log(typeof 123);           // number
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof null);          // object (버그)
console.log(typeof Symbol());      // symbol
console.log(typeof {});            // object
console.log(typeof []);            // object
console.log(typeof function(){});  // function

// 배열 확인
let a = [];
console.log(typeof a);          // "object"
console.log(Array.isArray(a));  // true ✅ 배열인지 정확히 확인

```

---

## 🎮 실습 코드 예시

### 📌 슬라이드 만들기

```html
	<div class="slider">
    <ul class="slider-cont" id="slider">
      <li class="item-slide"><img src="https://img.gqkorea.co.kr/gq/2024/07/style_6698e26c148f6-1400x944.jpg" alt="차은우 1" /></li>
      <li class="item-slide"><img src="https://img.gqkorea.co.kr/gq/2024/07/style_6698e292d0476-1400x944.jpg" alt="차은우 2" /></li>
      <li class="item-slide"><img src="https://img.gqkorea.co.kr/gq/2024/07/style_6698e2ad1edeb-1400x944.jpg" alt="차은우 3" /></li>
    </ul>
    <button type="button" class="btn-slider prev" onclick="prevSlide()"></button>
    <button type="button" class="btn-slider next" onclick="nextSlide()"></button>
  </div>

  <script>
    const slider = document.getElementById('slider'); // 슬라이드 전체를 감싸는 wrapper 요소를 가져옵니다.
    const totalSlides = slider.children.length; // 슬라이드 개수를 계산합니다. (자식 요소의 개수 = 슬라이드 수)
    let currentIndex = 0; // 현재 보여지고 있는 슬라이드 인덱스 (0부터 시작)

		// 슬라이드 위치를 업데이트하는 함수
    function updateSlidePosition() {
	    // 현재 인덱스에 따라 슬라이드 wrapper를 왼쪽으로 이동시킴 (가로 슬라이드 효과)
	    // 예: currentIndex가 1이면 -100%, 2이면 -200%로 이동
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

		// 이전 슬라이드로 이동하는 함수
    function prevSlide() {
	    // 현재 인덱스에서 1을 뺀 후 음수 방지를 위해 슬라이드 수를 더하고, 전체 슬라이드 수로 나눈 나머지
	    // 예: (0 - 1 + 3) % 3 = 2 → 마지막 슬라이드로 순환
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      
      // 위치 업데이트
      updateSlidePosition();
    }
    
		// 다음 슬라이드로 이동하는 함수
    function nextSlide() {
	    // 현재 인덱스에 1을 더한 뒤 전체 슬라이드 수로 나눈 나머지 → 마지막 다음엔 처음으로 돌아감
      currentIndex = (currentIndex + 1) % totalSlides;
      
      // 위치 업데이트
      updateSlidePosition();
    }
  </script>
```

### 📌 간단한 유효성 검사 만들기

```jsx

  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 40px;
    }

    input,
    button {
      margin: 8px 0;
      padding: 8px;
      font-size: 16px;
    }

    #result {
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
  
  <body>
    <h2>👤 입장 확인기</h2>
    <label>
      이름:
      <input type="text" id="nameInput" placeholder="이름을 입력하세요">
    </label>
    <br>
    <label>
      나이:
      <input type="number" id="ageInput" placeholder="숫자로 입력">
    </label>
    <br>
    <button onclick="checkEntry()">입장 가능 여부 확인</button>
    <p id="result"></p>
	 </body>
    <script>
      function checkEntry() {
        // 변수
        let name = document.getElementById("nameInput").value;
        let age = Number(document.getElementById("ageInput").value);

        const result = document.getElementById("result");

        // 데이터 타입 확인
        if (typeof name !== "string" || isNaN(age)) {
          result.textContent = "⚠️ 이름과 나이를 정확히 입력해주세요.";
          return;
        }

        // 논리 연산자 + 비교 연산자
        if (name === "" || age <= 0) {
          result.textContent = "⚠️ 유효한 이름과 나이를 입력하세요.";
        } else if (age >= 19 && name !== "") {
          // 산술 연산자 예시 포함
          result.textContent = `✅ 환영합니다, ${name}님! 내년엔 ${age + 1}살이 되시겠네요.`;
        } else {
          result.textContent = `❌ ${name}님은 ${age}살입니다. 성인만 입장 가능합니다.`;
        }
      }
    </script>
 
```