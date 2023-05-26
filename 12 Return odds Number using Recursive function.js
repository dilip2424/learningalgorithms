function collectOdds(nums) {
    let result = [];
    function helper(newnums) {
        if(newnums.length === 0) return;
        if(nums[0] % 2 !== 0){
            result.push(nums[0]);
        }
        newnums.shift();
        helper(newnums)
    }
       helper(nums)
    return result;
    
}

collectOdds([1,2,3,4,5,6])