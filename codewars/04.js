//Count cubes in a Menger Sponge
function calc_ms(n) {
    let res = 1;
    if (n === 0) {
        res = 1;
    }
    for (let i = 1; i <= n; i++) {
        res = res * 20;
    }
    return res;
}

console.log(calc_ms(5));