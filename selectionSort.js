// constructin the selection-sort algorithm

let selectionSort = (array) => {
    if (array.length === 1) {return array}
    for (let i = 0; i < array.length - 1; i++) {
        let minimum = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minimum]) {
                minimum = j;
            }
        }
        if (i !== minimum) {
            let temp = array[i];
            array[i] = array[minimum];
            array[minimum] = temp;
        }
    }
    return array;
}

let myTest = [54,23,2,6,99,125,15];
console.log(selectionSort(myTest));