
function isNumber(val) {
    return typeof val === 'number';
}

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'school', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'];

function isAllTrue(source, filterFn) {
    if (!source.length) {
        throw new Error('Array is empty');
    }
    for (var i = 0; i < source.length; i++) {
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
