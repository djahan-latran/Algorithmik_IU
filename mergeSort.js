// constructing the merge-sort algorithm

let merge = (myArray1,myArray2) => {
    let i = 0;
    let j = 0;
    let newArray = [];
    while (i < myArray1.length && j < myArray2.length) {
        if (myArray1[i] < myArray2[j]) {
            newArray.push(myArray1[i]);
            i++;
        } else {
            newArray.push(myArray2[j]);
            j++;
        }
    }
    while (i < myArray1.length) {
        newArray.push(myArray1[i]);
        i++;
    }
    while (j < myArray2.length) {
        newArray.push(myArray2[j]);
        j++;
    }
    return newArray;
}   

let mergeSort = (myArray) => {
    // base case
    if (myArray.length === 1) {
        return myArray;
    }
    let midIdx = Math.floor(myArray.length/2);
    let left = mergeSort(myArray.slice(0, midIdx));
    let right = mergeSort(myArray.slice(midIdx));

    return merge(left, right)
}


let myArray1 = [1,3,7,8];
let myArray2 = [2,4,5,6];
console.log(merge(myArray1, myArray2));

let myArray3 = [3,1,4,2];
console.log(mergeSort(myArray3));