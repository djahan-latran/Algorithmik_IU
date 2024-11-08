// constructing the bubbl-sort algorithm

let bubbleSort = (array) => {
    if (array.length === 1) {return array}
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) {
                temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    } return array;
}

let myTest = [54,23,2,6,99,125,15];
console.log(bubbleSort(myTest));