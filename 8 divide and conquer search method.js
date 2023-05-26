function searchvalue(array,findnumber){
    let min = 0;
    let max = array.length - 1;
   
    while(min <= max){
       
        var middle = Math.floor((min + max) / 2)
        var currentvalue = array[middle];
      
        if(currentvalue < findnumber){
            min = middle + 1;
            
        } else if (array[middle] > findnumber){
            max = middle - 1;
        } else{
            return middle;
        }
       
       
    }
    return -1;
}

console.log(searchvalue([1,2,3,4,5,6,8,9,12,15,16,29],7)) //-1
console.log(searchvalue([1,2,3,4,5,6,8,9,12,15,16,29],2)) //1