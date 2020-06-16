function calculateTotalMortgage(percent, contribution, amount, date) {

    'use strict';
    if (isNaN(percent)) {
        console.log(`Параметр "Процнтная ставка" содержит неправильное значение ${percent}`);
        return;
    } else if (isNaN(contribution)) {
        console.log(`Параметр "Сумма первоначального взноса" содержит неправильное значение ${contribution}`);
        return;
    } else if (isNaN(amount)) {
        console.log(`Параметр "Сумма кредита" содержит неправильное значение ${amount}`);
        return;    
    } else {
        let bodyCredit = amount - contribution;
        let quantityMonth = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth());
        let P = (percent/100)/12;
        let amountPerMonth = bodyCredit * ( P + P / (((1 + P) ** quantityMonth) -1));
        let totalAmount = parseFloat((amountPerMonth * quantityMonth).toFixed(2));

        return totalAmount;
    }

    
}

function getGreeting(name) {
    let greeting;
    if (!name) {
        greeting = `Привет, мир! Меня зовут Аноним`;
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`;
    }
    return greeting;
}