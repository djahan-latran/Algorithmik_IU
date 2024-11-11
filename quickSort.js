// constructing the quick-sort algorithm

let swap = (array, firstIdx, secondIdx) => {
    let temp = array[firstIdx];
    array[firstIdx] = array[secondIdx];
    array[secondIdx] = temp;

    return array
}

let pivot = (array, firstIndex=0, endIndex=array.length-1) => {
    let swapIdx = firstIndex;

    for (let i = firstIndex+1; i <= endIndex; i++) {
        if (array[i] < array[firstIndex]) {
            swapIdx++;
            swap(array, swapIdx, i)
        }
    } swap(array, firstIndex, swapIdx)
    return swapIdx;
}

let quickSort = (array, firstIndex=0, endIndex=array.length-1) => {
    if (firstIndex < endIndex) {
        let pivotIdx = pivot(array, firstIndex, endIndex);
        quickSort(array, firstIndex, pivotIdx-1);
        quickSort(array, pivotIdx+1, endIndex);
    } return array
}

myArray = [5,1,4,3,2,6,9];
let myPivotTest = pivot(myArray);
console.log(myPivotTest);

let mySortTest = quickSort(myArray);
console.log(mySortTest);