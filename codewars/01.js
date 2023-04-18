//Find the stray number

function stray(numbers) {
    let res;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[0] !== numbers[1] && numbers[1] == numbers[2]) {
            res = numbers[0];
            return res;
        }
        if (numbers[i] !== numbers[i + 1]) {
            res = numbers[i + 1];
            return res;
        }
    }
    console.log(res);
}
stray([17, 17, 3, 17, 17, 17, 17]);