function selectionSort(array) {
    for (let index = 0; index < array.length; index++) {
        let min = index;
        for (let j = index + 1; j < array.length; j++) {
            if(array[min] > array[j]){
                min = j
            }
        }
        [array[index],array[min]] = [array[min],array[index]];
    }
    return array;
}

selectionSort([58,54,3,5,32,1,78,54,95,48,94,35,6,38])