const fibonacci = function(n) {

    let nthNumber = parseInt(n);

    if (nthNumber === 1 || nthNumber === 0) return nthNumber;
    if (nthNumber === 2) return 1;
    if (nthNumber < 0) return "OOPS"

    let prevNum = 0;
    let nextNum = 1;

    for (let i = 2; i <= nthNumber; i++) {

        let fibValue = prevNum + nextNum;
        prevNum = nextNum;
        nextNum = fibValue;

    }

    return nextNum;

};

// Do not edit below this line
module.exports = fibonacci;
