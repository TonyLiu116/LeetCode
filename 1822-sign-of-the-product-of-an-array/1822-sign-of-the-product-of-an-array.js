/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let neg = 0;
    for(let i = 0 ; i < nums.length ; i ++){
        if(nums[i] == 0) return 0;
        if(nums[i] < 0) neg ++;
    }
    if(neg % 2) return -1;
    return 1;
};