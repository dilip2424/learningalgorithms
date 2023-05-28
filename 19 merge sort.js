function mergeSort(array1,array2) {
    
    let result = [];
    let i = 0;
    let j = 0;
    while(i < array1.length && j < array2.length){
       
        if(array1[i] < array2[j]){
            result.push(array1[i]);
            i++;
        }else{
            result.push(array2[j]);
            j++
        }
        
    }
    while (i < array1.length) {
        result.push(array1[i]);
        i++;
    }
    
    while (j < array2.length) {
        result.push(array2[j]);
        j++;
    }
    return result;
}

function merge(array){
    if(array.length <= 1) return array;
    let middle = Math.floor(array.length / 2);
    let left = merge(array.slice(0,middle));
    let right = merge(array.slice(middle));
    return mergeSort(left,right)
    
}


console.log(merge([5,8,2,3,9,4,15,11,90,54,1]))