
function bubbleSort(array) {
    var noSwap;
    for (let i = array.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if(array[j+1] < array[j]) {
                 noSwap = false;
                [array[j+1], array[j]] = [array[j],array[j+1]];
            }
        }
        if(noSwap) break;
        
    }
    return array;
}

console.log(bubbleSort([4,6,9,3,5,6]))