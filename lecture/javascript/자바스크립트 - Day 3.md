# 자바스크립트 - Day 3

날짜: 2025년 7월 25일

# 📘 자바스크립트 **조건문 / 함수 선언 방식**

---

## **✅ 1. 조건문 (Conditionals)**

> **조건문**은 **특정 조건에 따라 코드 실행 흐름을 분기**시키는 문법
***"만약 ~라면 이 코드를 실행하고, 아니면 저 코드를 실행하라"***
> 

### **🔹 `if / else / else if` 문**

```jsx
if (조건) {
  // 조건이 true일 때 실행
} else if (다른 조건) {
  // 위 조건이 false이고 이 조건이 true일 때 실행
} else {
  // 위 모든 조건이 false일 때 실행
}
```

📌 **주의**: `if` 조건식은 항상 **Boolean 값**으로 평가

### 🔹 `switch` 문

```jsx

// 작성방법
switch (값) {
  case 조건값1:
    // 실행 코드
    break;
  case 조건값2:
    // 실행 코드
    break;
  default:
    // 모든 case와 일치하지 않을 때 실행
}

// 예시
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("사과입니다.");
    break;
  case "banana":
    console.log("바나나입니다.");
    break;
  default:
    console.log("알 수 없는 과일입니다.");
}
```

📌 `break` 문을 생략하면 아래 case도 **연속 실행(fall-through)**

### **🔹 삼항 연산자 (조건 ? 참 : 거짓)**

- 간단한 조건문을 한 줄로 표현할 수 있습니다.
- 복잡한 로직에는 사용을 피하는 것이 가독성에 좋습니다.

```jsx
const result = 조건식 ? 값1 : 값2; // 조건 ? 참일 때 실행 : 거짓일 때 실행

// 예시
let age = 15;
let result = age >= 18 ? "성인" : "미성년자";
console.log(result); // 미성년자
```

## **✅ 2. 함수(Function)**

> 함수는 하나의 작업을 수행하도록 독립적으로 설계된 코드 블록
반복적으로 사용하는 로직을 함수로 정의 후 **재사용** 가능 
코드의 **가독성**과 **유지보수성**도 향상
> 

### **🔹** 함수 선언문 (Function Declaration)

```jsx

sayHello(); // 출력: 안녕하세요!

function sayHello() {
  console.log("안녕하세요!");
}
```

**⁉️ *호이스팅*** 되므로, 함수 선언 이전에도 호출 가능

### **🔹** 함수 표현식 (Function Expression)

```jsx

sayHello(); // 출력??

const sayHello = function() {
  console.log("안녕하세요!");
};

sayHello(); // 출력: 안녕하세요!
```

**⁉️ 호이스팅이 안 됨** → 선언 이전에는 사용할 수 없음

- 호이스팅 (Hoisting) ⁉️
    
    <aside>
    💡
    
    **Hoisting : 끌어 올리기, 들어올려 나르기**
    
    즉, **코드를 실행하기 전에 자바스크립트가 변수와 함수 선언을 "미리 읽는다"는 것**이야.
    하지만 값은 나중에 할당되므로, 순서를 잘 지켜야 에러가 나지 않는다.
    
    </aside>
    

### **🔹** **화살표 함수 (Arrow Function)**

- ES6에서 도입된 짧은 문법의 함수
- 주로 `const`나 `let`으로 선언됨

```jsx
const greet = () => {
  console.log("안녕하세요");
};
```

### **🔹 매개변수(Parameter)**

- 매개변수는 함수를 선언할 때 정의하는 변수

### **🔹 인자(Argument)**

- 인자는 함수를 호출할 때 전달하는 실제 값

### **🔹 반환값 (Return Value)**

- `return` 문이 실행되면 함수는 즉시 종료되고 값을 돌려줍니다.

### 🛠 매개변수(Parameter), **인자(Argument),**  반환값(Return) 예제

```jsx

// 예제 1.
function add(a, b) {
  return a + b;
}

const result = add(3, 4); // result = 7

// 예제 2.
function greet(name = "게스트") {
  console.log(`안녕하세요, ${name}님!`);
}

greet();           // 안녕하세요, 게스트님!
greet("시온");     // 안녕하세요, 시온님!
```

- `a`, `b`: **매개변수** (parameter)
- `3`, `4`: **인수** (argument)
- `return`: 함수의 **출력값**

## ✅ 함수는 값이다 → 변수에 저장, 다른 함수에 전달, 리턴도 가능!

```jsx
function multiply(x) {
  return x * 2;
}

function applyFn(fn, value) {
  return fn(value);
}

console.log(applyFn(multiply, 5)); // 10

```

## 🎮 실습 코드 예시

### 📌 계산기

```jsx
// 계산기
function calculate(a, b, operator) {
  if (operator === "+") return a + b;
  else if (operator === "-") return a - b;
  else if (operator === "*") return a * b;
  else if (operator === "/") return a / b;
  else return "지원하지 않는 연산자입니다.";
}

console.log(calculate(10, 5, "*")); // 50
```

### 📌 회원가입

```jsx

	<div>
	  <h2>회원가입</h2>
		<form>
		  <label for="email">이메일</label>
		  <input type="email" id="email" placeholder="example@email.com">
		  <div id="emailMessage" class="message"></div>
		
		  <label for="password">비밀번호</label>
		  <input type="password" id="password" placeholder="8자 이상, 특수문자 포함">
		  <div id="passwordMessage" class="message"></div>
		
		  <button onclick="validateForm()">가입하기</button>
		  <div id="submitMessage" class="message"></div>
	  </form>
  </div>

  <script>
    // 이메일 유효성 검사 함수
    function isValidEmail(email) {
      return email.includes("@") && email.includes(".");
    }

    // 비밀번호 유효성 검사 함수
    function isValidPassword(password) {
      return password.length >= 8 && /[!@#$%^&*]/.test(password);
    }

    // 폼 전체 유효성 검사 및 메시지 표시
    function validateForm() {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
      const emailMessage = document.getElementById("emailMessage");
      const passwordMessage = document.getElementById("passwordMessage");
      const submitMessage = document.getElementById("submitMessage");

      let valid = true;

      // 이메일 검사
      if (!email) {
        emailMessage.textContent = "이메일을 입력하세요.";
        emailMessage.className = "message error";
        valid = false;
      } else if (!isValidEmail(email)) {
        emailMessage.textContent = "올바른 이메일 형식이 아닙니다.";
        emailMessage.className = "message error";
        valid = false;
      } else {
        emailMessage.textContent = "사용 가능한 이메일입니다.";
        emailMessage.className = "message success";
      }

      // 비밀번호 검사
      if (!password) {
        passwordMessage.textContent = "비밀번호를 입력하세요.";
        passwordMessage.className = "message error";
        valid = false;
      } else if (!isValidPassword(password)) {
        passwordMessage.textContent = "비밀번호는 8자 이상, 특수문자를 포함해야 합니다.";
        passwordMessage.className = "message error";
        valid = false;
      } else {
        passwordMessage.textContent = "안전한 비밀번호입니다.";
        passwordMessage.className = "message success";
      }

      // 최종 메시지
      if (valid) {
        submitMessage.textContent = "회원가입이 완료되었습니다!";
        submitMessage.className = "message success";
      } else {
        submitMessage.textContent = "입력한 정보를 다시 확인해주세요.";
        submitMessage.className = "message error";
      }
    }
  </script>
```