'use strict';
const rainbow = 'padding: 0 20px; color: rainbow'
const productName = prompt ('Введите наименование товара', ['Samsung S20-FE']);
let productCount = prompt ('Введите количество товара', [2]);


if (Number.isFinite(+productCount) === true) {console.log('productCount is number')
  const productCategory = prompt ('Введите категорию товара', ['Смартфоны']);
  let productPrice = prompt ('Введите стоимость товара', [45000]);

  if (Number.isFinite(+productPrice) === true) {console.log('productPrice is number')
    const totalPrice = productPrice * productCount;
    console.log(`На складе ${productCount} единицы товара ${productName} на сумму ${totalPrice} деревянных`)
  }
  else
  {console.log('%cproductPrice is NOT a number', rainbow)}

} else
{console.log('%cproductCount is NOT a number', rainbow)}


// console.log(`Имя товара: ${productName}`);
// console.log(`Категория: ${productCategory}`);
// console.log(`Количество товара: ${productCount}`);
// console.log (`Стоимость одного товара ${productPrice}`)
// console.log(`Итого: ${totalPrice} руб.`);



