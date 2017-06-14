let myforEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
};
let myFilter = (array, callback) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray[newArray.length] = array[i];
        }
    }
    return newArray;
};

let myMap = (array, callback) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray[i] = callback(array[i]);
    }
    return newArray;

};

let mySlice = (array, begin, end) => {
    let newArray = [];
    while (begin < end) {
        newArray[newArray.length] = array[begin++];
    }
    return newArray;
};

let myReduce = (array, callback) => {
    let currentValue = 1;
    let rez = callback(array[0], array[currentValue++]);
    while (currentValue < array.length) {
        rez = callback(rez, array[currentValue++]);
    }
    return rez;
};

let mySplice = (array, start, deleteCount) => {
    let delElem = [],
        newArr = [],
        startIndex = start;
    outer: while (deleteCount--) {
        while (start < array.length) {
            delElem[delElem.length] = array[start++];
            continue outer;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (i !== startIndex) {
            newArr[newArr.length] = array[i];
        } else {
            for (let j = 1; j < delElem.length; j++) {
                i++;
            }
        }
    }
    return [newArr, `${delElem} - removed element(s)`];
};

module.exports = {
    forEach: myforEach,
    filter: myFilter,
    map: myMap,
    slice: mySlice,
    reduce: myReduce,
    splice:mySplice
};







