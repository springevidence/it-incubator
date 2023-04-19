//Keep the Order

function keepOrder(ary, val) {
    for (let i = 0; i < ary.length; i++) {
        if (ary[i] >= val) {
            return i;
        }
        else if (val > ary[ary.length - 1]) {
            console.log(ary[ary.length-1]);
            return ary.indexOf(ary[ary.length-1]) + 1;
        }
    }
}

// console.log(keepOrder([1, 2, 3, 4, 7], 5)); //4
// console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2)); //2
// console.log(keepOrder([1, 2, 3, 4], -1)); //0
// console.log(keepOrder([1, 2, 3, 4], 0)); //0
// console.log(keepOrder([1, 2, 3, 4], 5)); //4
// console.log(keepOrder([-5, -4, -3, 1, 3, 3, 5], 6)); //7
console.log(keepOrder([-5, -5, -4, -3, 2, 2, 3, 3], 4)); //8 

