let arrFnc = require('./arrayFunctions.js');

let array = [1, 2, 3, 4, 5, 6];


console.log(arrFnc);

console.info('------- forEach -------');
arrFnc.forEach(array, item => console.log(item));

console.info('------- filter -------');
let greaterThan4 = arrFnc.filter(array, item => item > 4);
console.log(greaterThan4);

console.info('------- map -------');
let square = arrFnc.map(array, item => item * item);
console.log(square);

console.info('------- slice -------');
let fruits = ['Банан', 'Апельсин', 'Лимон', 'Яблоко', 'Манго'];
let arr = arrFnc.slice(fruits, 1, 3);
console.log(arr);

console.info('------- reduce -------');
let arrMinus = [100, 10, 20, 30];
console.log(arrFnc.reduce(array, (a, b) => a + b));
console.log(arrFnc.reduce(arrMinus, (a, b) => a - b));

console.info('------- splice -------');
console.log(arrFnc.splice(array, 3, 2));

let myFish = ['ангел', 'клоун', 'барабанщик', 'мандарин', 'хирург'];
console.log(arrFnc.splice(myFish, 2, 2));
