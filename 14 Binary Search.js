function BinarySearch(array,findnumber) {
    let min = 0;
    let max = array.length - 1;
    let i = 1;
    while(min <= max){
        const middle = Math.floor((min + max) / 2);
        console.log('min',min)
        console.log('max',max)
        console.log('middle',middle)
        const findCurrectValue = array[middle];
        if(findCurrectValue < findnumber){
            min = middle + 1;
        }else if(findCurrectValue > findnumber){
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1
}

BinarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],25)