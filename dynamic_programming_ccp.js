// using dynamic programming with memoization to solve the coin change problem


let dpCoinChange = (amount, coins) => {
    if (amount === 0) {
        return 0
    }
    let table2d = [];
    for (let i=0; i <= coins.length; i++) {
        let row = [];
        for (let j=0; j <= amount; j++) {
            row.push(undefined);
        }
        table2d.push(row);
    }
    for (i=0; i < coins.length; i++) {
        table2d[i][0] = 0;
        }
    for (let j=0; j<=amount; j++) {
        table2d[0][j] = j;
        }
    
    for (i=1; i<=coins.length; i++) {
        for (let j=0; j<=amount; j++) {
            if ((j - coins[i-1]) >= 0) {
                table2d[i][j] = Math.min(table2d[i-1][j],table2d[i][j-coins[i-1]]+1);
            } else {
                table2d[i][j] = table2d[i-1][j];
            }
        }
    }
    console.log(`fewest amount of coins: ${table2d[coins.length][amount]}`)

    let usedCoins = []
    i = coins.length
    j = amount
    while(i > 0) {
        if (table2d[i][j] === table2d[i-1][j]) {
            i--;
        } else {
            j = j - coins[i-1];
            usedCoins.push(coins[i-1]);
        }
    }
    console.log(`coins used: ${usedCoins}`)
}
let coins = [1,2,3,8]
let amount = 21
let myTest = dpCoinChange(amount, coins)
myTest
