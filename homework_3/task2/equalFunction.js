function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    for (let prop in obj1) {
        if (obj1[prop] instanceof Date) {
            if (obj1[prop].valueOf() !== obj2[prop].valueOf()) {
                return false;
            }
        }
    }
    if (obj1 instanceof Array) {
        if (obj1.length === obj2.length) {
            for (let i = 0; i < obj1.length; i++) {
                if (!deepEqual(obj1[i], obj2[i])) {
                    return false;
                }
            }
        } else {
            return false;
        }
    }
    if (obj1 === null || typeof(obj1) !== "object" ||
        obj2 === null || typeof(obj2) !== "object") {
        return false;
    }
    if (!Array.isArray(obj1)) {
        for (let prop in obj1) {
            if (!deepEqual(obj1[prop], obj2[prop])) {
                return false;
            }
        }
    }
    return true;
}
module.exports = deepEqual;

