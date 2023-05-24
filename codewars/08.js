function findAverage(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    if (array.length === 0) {
        return 0
    } else return sum / array.length;
}
findAverage([1,1,1])
findAverage([1,2,3])
findAverage([1,2,3,4])