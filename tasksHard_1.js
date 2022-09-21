'use strict';
console.log('Сложная задача 1:');
let taxValue = '';

const income = prompt('Введите доход:', [10000]);

if (+income <=15000 && +income>0) {taxValue = '13%'} 
else if (+income >15000 && +income < 50000) {taxValue = '20%'}
else if (+income >=50000) {taxValue = '30%'} 
else {console.log('Ошибка: введите число!')};

// console.log('income', income);
// console.log('taxValue', taxValue);

let taxTotal = (+income * 0.13); 


switch (taxValue) {
    case '13%':
    taxTotal = (+income * 0.13);         
    console.log('(13%) Налог с суммы составит:',  taxTotal);
    break;
    case '20%':
        taxTotal = (+income * 0.20);
        console.log('(20%) Налог с суммы составит:', taxTotal);
        break;

        case '30%':
            taxTotal = (+income * 0.30);
            console.log('(30%) Налог с суммы составит:', taxTotal);
            break;  
            default:
                taxTotal = (+income * 0.13);    
};


console.log('Сложная задача 2:');


let taxValueEu = '';

const incomeEu = prompt('Введите доход:', [16000]);

if (+incomeEu <=15000 && +incomeEu>0) {taxValueEu = '13%'} 
else if (+incomeEu >15000 && +incomeEu < 50000) {taxValueEu = '20%'}
else if (+incomeEu >=50000) {taxValueEu = '30%'} 
else {console.log('Ошибка: введите число!')};

// console.log('incomeEu', incomeEu);
// console.log('taxValueEu', taxValueEu);

let taxTotalEu = (+incomeEu * 0.13); 


switch (taxValueEu) {
    case '13%':
    taxTotalEu = (+incomeEu * 0.13);         
    console.log('(13%) Налог с суммы составит:',  taxTotalEu);
    break;
    case '20%':
        taxTotalEu = (15000 * 0.13) + ((+incomeEu-15000) * 0.20);
        console.log('(20%) Налог с суммы составит:', taxTotalEu);
        break;

        case '30%':
            taxTotalEu = (50000 * 0.20) + ((+incomeEu-50000) * 0.30);
            console.log('(30%) Налог с суммы составит:', taxTotalEu);
            break;  
            default:
                taxTotalEu = (+incomeEu * 0.13);    
};
