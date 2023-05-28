function searchIndex(array,num) {
    for(let i = 0; i < array.length; i++){
     if(array[i] == num) return i;
    }
    return -1;
}

searchIndex([1,2,4,5,10,8,7,50,67,89,56],44);