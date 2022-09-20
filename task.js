console.log('Доп задание 1:')

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

