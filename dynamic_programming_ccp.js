// using dynamic programming with memoization to to solve the coin change problem


let dpCoinChange = (amount, coins) => {
    let table2d = [];
    for (let i=0; i < coins.length; i++) {
        let row = [];
        for (let j=0; j <= amount; j++) {
            row.push(j);
        }
        table2d.push(row);
    }
    return table2d
}
let coins = [1,2,3]
let amount = 15
let myTest = dpCoinChange(amount, coins)
console.log(myTest)
