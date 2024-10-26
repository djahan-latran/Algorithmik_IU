// constructing algorithms to calculate the faculty of a number both iterative and recursive.

let facIter = (num) => {
    if (num > 0) {
        var prdt = 1;
        for (let i=2; i<=num; i++) {
            prdt = prdt * i;
        }
    }
    return prdt
}

console.log(facIter(5))

let facRec = (num) => {
    if (num > 0) {
        if (num === 1) {return 1}
        else {
            return num * facRec(num - 1)
        }
    }
}

console.log(facRec(5))