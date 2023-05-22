function alternate(n, firstValue, secondValue) {
    let arr = [];
    for (let i = 0; i < n - n/2; i++) {
        arr.push(firstValue, secondValue)
    }
    if (n % 2 === 0) {
        return arr
    } else {
        arr.splice(arr.length - 1, 1);
        return arr
    }
}

console.log(alternate(5, true, false));
console.log(alternate(20, 'blue', 'red'));
