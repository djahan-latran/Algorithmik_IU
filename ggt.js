// implementing an algorithm to find tge greatest common diviser

let ggt = function(num1, num2) {
    if (num1 < num2) {
        var smaller = num1;
        var bigger = num2;
    } else {
        var smaller = num2;
        var bigger = num1;
    }
    if (bigger % smaller === 0) {
        return console.log("ggt is " + smaller)
    } else {
        let divider = smaller;
        while (bigger % divider !== 0 || smaller % divider !== 0) {
            divider--;
        }
        return console.log("ggt is " + divider)
    }
}
ggt(16,32)
ggt(8,8)