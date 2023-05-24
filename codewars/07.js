function getSlope(p1, p2) {
    // Return the slope of the line through p1 and p2
    let res = (p2[1]-p1[1]) / (p2[0]-p1[0])
    if (res === 1 / 0) {
        return null;
    } else if (res === 1) {
        return res
    } else if (res === -1){
        return res
    } else if ((p2[1]===p1[1]) && (p2[0]===p1[0])) {
        return null;
    } else {
        return (p2[1]-p1[1]) / (p2[0]-p1[0])
    }
}
getSlope([1,1],[2,2])
getSlope([11,1],[1,11])
getSlope([1,1],[1,2])
getSlope([1,1],[1,1])
getSlope([ 8, 3 ], [ -4, 5 ])
getSlope([ 1, 8 ], [ 2, 9 ])
getSlope([ -5, -5 ], [ 9, 9 ])