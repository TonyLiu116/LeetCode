/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let stacks = [];
    for(let i = 0 ; i < nums.length ; i ++){
        let k = 0;
        for(k = 0 ; k < stacks.length ; k ++){
            if(stacks[k] >= nums[i]) {
                stacks[k] = nums[i]
                break;
            }
        }
        if(k == stacks.length) stacks.push(nums[i]);
    }
    return stacks.length;
};