function maxSbuArraySum(array, num){
    let maxSum = 0;
    let tempSum = 0;
    for (let index = 0; index < num; index++) {
        maxSum += array[index]
    }
    tempSum = maxSum;
    for (let j = num; j < array.length; j++) {
        tempSum =  tempSum - array[j - num] + array[j];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
    
    
}
console.log(maxSbuArraySum([2,3,5,6,7,8,5,3,2,5],3)) //21