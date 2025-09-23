function calculate(a, b, operator){
    if (operator === "+") return a + b;
    else if (operator === "-") return a - b;
    else if (operator === "*") return a * b;
    else if (operator === "/") return a / b;
    else return "지원하지 않는 연산자입니다.";
}

console.log(calculate(10, 5, "*"));

function calculate2(a, b, operator) {
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "지원하지 않는 연산자입니다.";
    }
}

console.log(calculate2(20, 5, "*"));