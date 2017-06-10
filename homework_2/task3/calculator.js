function calculator(firstNumber) {
    return {
        sum: function () {
            var argSum = 0;
            for (var i = 0; i < arguments.length; i++) {
                argSum += arguments[i];
            }
            return firstNumber + argSum;
        },
        dif: function () {
            var argSum = 0;
            for (var i = 0; i < arguments.length; i++) {
                argSum += arguments[i];
            }
            return firstNumber - argSum;

        },
        div: function () {
            var divisor = 0;
            for (var i = 0; i < arguments.length; i++) {
                if (!arguments[i]) {
                    throw new Error('Can`t divide by zero ')
                }
                divisor += arguments[i];
            }
            return firstNumber / divisor;

        },
        mul: function () {
            var product = 1;
            for (var i = 0; i < arguments.length; i++) {
                product *= arguments[i];
            }
            return firstNumber * product;
        }

    }
};

var myCalculator = calculator(100);

console.log(myCalculator.sum(1, 2, 3));
console.log(myCalculator.dif(10, 20));
try {
    console.log(myCalculator.div(2, 2));
}
catch (e) {
    console.log(e.message);
}
console.log(myCalculator.mul(2, 2));
