// 2. # ДЗ - 2
// Написать фукнцию 'isSomeTrue', которая принимает 2 параметра - 'source' и 'filterFn'
// 'source' - массив
// 'filterFn' - фильтрующая функция
// Если фильтрующая функция вернет 'true' хотя бы для одного элемента массива, то и сама 'isSomeTrue' вернет 'true'
// Если фильтрующая функция вернет 'false' для ВСЕХ элементов массива, то и сама 'isSomeTrue' вернет 'false'
//
// Всё должно быть реализовано с использованием чистого js (не используя сторонние библиотеки).
// Так же, нельзя использовать функции для работы с массивами.
//
//     пример:
// console.log(isSomeTrue(allNumbers, isNumber)); //вернет true
// console.log(isSomeTrue(someNumbers, isNumber)); //вернет true
// console.log(isSomeTrue(noNumbers, isNumber)); //вернет false


'use strict';

function isNumber(val) {
    return typeof val === 'number';
}

let allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'school', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function isAllTrue(source, filterFn) {
    if (!source.length) {
        throw new Error('Array is empty');
    }
    for (let i = 0; i < source.length; i++) {
        if (filterFn(source[i])) {
            return true;
        }
    }
    return false;

}

try {
    console.log(isAllTrue(allNumbers, isNumber));
    console.log(isAllTrue(someNumbers, isNumber));
    console.log(isAllTrue(noNumbers, isNumber));
} catch (e) {
    console.error(`${e.message}. Class of mistake is ${e.name}`);
}
