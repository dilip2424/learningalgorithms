function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        var currentValue = array[i];
        for (var j = i-1; j >= 0 && array[j] > currentValue; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = currentValue
        console.log(array);
        console.log('1 itteration Completed')
    }
}

insertionSort([8,4,3,5,9,1])