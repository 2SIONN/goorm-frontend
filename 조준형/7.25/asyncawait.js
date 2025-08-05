function makeCoffee() {
    return new Promise((resolve) => {
        console.log("1. 커피 주문 완료 (제조 중...)");
        setTimeout(() => {
            console.log("2. 커피 완료!");
            resolve();
        }, 3000);
    });
}

async function receiveCoffee() {
    await makeCoffee();
    console.log("3. 커피 받으러 갑니다!");
}

receiveCoffee();