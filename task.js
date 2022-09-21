'use strict';
console.log('Задание 2:')

// const rain = (min, max) => {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
//
// };
//
// console.log ('Rain', rain(0,2));

const rain = () => {
  return Math.floor(Math.random() * 2);
};

// console.log ('Rain', rain());
if (rain() === 0) {console.log('Дождя нет!')} else if (rain() === 1) {console.log('Пошёл дождь. Возьмите зонт!')}

console.log('Задание 3:')

const math = prompt('Введите кол-во баллов по математике: ', [85]);
const ruLang = prompt('Введите кол-во баллов по русскому языку: ', [75]);
const iT = prompt('Введите кол-во баллов по информатике: ', [95]);
const totalScore = (+math) + (+ruLang) + (+iT);
// console.log('totalScore', totalScore);


if  (totalScore >= 265 ) {
  console.log('Поздравляю, вы поступили на бюджет!')
} else {
  console.log('Вы не прошли, попробуйте другой факультет или университет!')
};

console.log('Задание 4:')
const withdrawalCount = prompt('Введите сумму снятия кратной 100 единиц', [100]);
const withdrawalCountValid = (+withdrawalCount) % 100;
// console.log(withdrawalCountValid);
if (withdrawalCountValid === 0 ) {
console.log ( `Выдача ${withdrawalCount} ye`);
} 

else {
  console.log ( `Выдача ${withdrawalCount} ye невозможна введите количество кратное 100 единиц`);
}