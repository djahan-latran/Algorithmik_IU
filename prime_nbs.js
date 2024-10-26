// constructing a function to identifiy a prime number both iterative and recursive

let isPrimeIter = (num) => {
    for (let i=2; i < num; i++) {
        if (num % i === 0) {
            return false
        } else {return true}
    }
}

console.log(isPrimeIter(8));
console.log(isPrimeIter(5));
console.log(isPrimeIter(11));

let isPrimeRec = (num,d) => {
    if (num > 0) {  
        if (d === 1) {return true}
        if (num % d === 0) {return false}
        else {
            return isPrimeRec(num,d-1)
        }
    }
}

console.log(isPrimeRec(8,7));
console.log(isPrimeRec(5,4));
console.log(isPrimeRec(11,10));