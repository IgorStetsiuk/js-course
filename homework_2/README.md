### ДЗ 1:
Написати функцію 'isAllTrue', яка приймає 2 параметра - 'source' і 'filterFn'
source - масив
'FilterFn' - фільтруюча функція
Якщо фільтруюча функція поверне 'true' для ВСІХ елементів масиву, то і сама 'isAllTrue' поверне 'true'
Якщо фільтруюча функція поверне 'false' хоча б для одного елемента масиву, то і сама 'isAllTrue' поверне 'false'

приклад:
```javascript
var allNumbers = [1, 2, 4, 5, 6, 7, 8],
someNumbers = [1, 2, 'привіт', 4, 5, 'loftschool', 6, 7, 8],
noNumbers = [ 'це', 'масив', 'без', 'чисел'];

function isNumber (val) {
return typeof val === 'number';
}

console.log (isAllTrue (allNumbers, isNumber)); // поверне true
console.log (isAllTrue (someNumbers, isNumber)); // поверне false
console.log (isAllTrue (noNumbers, isNumber)); // поверне false
```
Викидати і обробляти виключення, якщо в 'source' порожній масив.


### ДЗ - 2
Написати фукнции 'isSomeTrue', яка приймає 2 параметра - 'source' і 'filterFn'
'Source' - масив
'FilterFn' - фільтруюча функція
Якщо фільтруюча функція поверне 'true' хоча б для одного елемента масиву, то і сама 'isSomeTrue' поверне 'true'
Якщо фільтруюча функція поверне 'false' для ВСІХ елементів масиву, то і сама 'isSomeTrue' поверне 'false'

Все повинно бути реалізовано з використанням чистого js (не використовуючи сторонні бібліотеки).
Так само, не можна використовувати функції для роботи з масивами.

приклад:
```javascript
console.log (isSomeTrue (allNumbers, isNumber)); // поверне true
console.log (isSomeTrue (someNumbers, isNumber)); // поверне true
console.log (isSomeTrue (noNumbers, isNumber)); // поверне false
```

### ДЗ 3 (із зірочкою)
Написати функцію 'calculator' (у вигляді модуля), яка має один параметр - 'firstNumber'
'FirstNumber' - це число, з яким будуть проводитися дії
Функція 'calculator' повинна повертати об'єкт, у якого повинно бути кілька функцій.
Кожна з цих функцій приймає необмежену кількість аргументів і виробляє якісь арифметичні
операції з цими аргументами і тим числом, яке було передано в 'calculator' і повертає результат:
- 'sum' - складає 'firstNumber' з переданим аргументами
- 'dif' - віднімає з 'firstNumber' передані аргументи
- 'div' - ділить 'firstNumber' на перший переданий аргумент. Результат цієї операції ділиться на другий переданий аргумент (якщо він є) і так далі
- 'mul' - примножує 'firstNumber' на перший переданий аргумент. Результат цієї операції множиться на другий переданий аргумент (якщо він є) і так далі.
Передбачити виняткові ситуації, для функції 'div', коли дільник дорівнює нулю

приклад:
```javascript
var myCalculator = calculator (100);

console.log (myCalculator.sum (1, 2, 3)); // поверне 106
console.log (myCalculator.dif (10, 20)); // поверне 70
console.log (myCalculator.div (2, 2)); // поверне 25
console.log (myCalculator.mul (2, 2)); // поверне 400
```