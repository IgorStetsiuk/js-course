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


console.info('COMPARISON FUNCTION (task 2)');


let objA = {
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
    prop4: {
        subProp1: 'sub value1',
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2,prop3: new Date(2016, 2, 10)}, 4, 5]
        }
    },
    prop5: 1000,
    prop6: new Date(2016, 2, 10)
};

let objB = {
    prop5: 1000,
    prop3: 'value3',
    prop1: 'value1',
    prop2: 'value2',
    prop6: new Date('2016/03/10'),
    prop4: {
        subProp2: {
            subSubProp1: 'sub sub value1',
            subSubProp2: [1, 2, {prop2: 1, prop: 2,prop3: new Date('2016/03/10')}, 4, 5]
        },
        subProp1: 'sub value1'
    }
};

console.log('result => ');
console.log(deepEqual(objA,objB));