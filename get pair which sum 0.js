function sumZero(arrayv){
    
    let left = 0;
    let right = arrayv.length - 1;
    let i = 1;
    while(left < right){
        
        let sum = arrayv[left] + arrayv[right];
        
        if(sum === 0){
            return [arrayv[left], arrayv[right]];
        }
        if(sum > 0){
            right--;
        }
        if(sum < 0){
           left++;
        }
       
    }
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5])) //[-2,2]