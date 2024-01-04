/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let flag = [], res=[];
    for(let i = 0; i < nums.length ; i ++){
        if(flag[nums[i]] === undefined){
            flag[nums[i]] = 0;
            res.push(nums[i]);
        }
        flag[nums[i]]++;
    }
    let result = 0;
    for(let i = 0 ; i < res.length ; i ++){
        if(flag[res[i]] === 1) return -1;
        result += Math.ceil(flag[res[i]]/3);
    }
    return result;
};