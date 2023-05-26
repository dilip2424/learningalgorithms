function same(arr1, arr2) {
    
    if(arr1.length != arr2.length) return false;
    var tempobj1 = {}
    var tempobj2 = {}
    for(var array1 of arr1){
        tempobj1[array1] = (tempobj1[array1] || 0) + 1;
    }
    for(var array2 of arr2){
        tempobj2[array2] = (tempobj2[array2] || 0) + 1;
    }
    for(var temp1 in tempobj1){
        if(!(temp1**2 in tempobj2)){
            return false
        }
        if(tempobj2[temp1**2] !== tempobj1[temp1]){
            return false;
        }
        
        
    }
    return true;
}

console.log(same([1,2,3,4,2],[4,9,16,4,1])); //true
console.log(same([1,2],[1,3])); //false