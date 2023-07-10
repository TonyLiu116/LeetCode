/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let res = [], n = nums.length;
    res.push(-1);
    for(let i = 0 ; i < n ; i ++)
        if(nums[i] === 0) res.push(i);
    res.push(n);
    if(res.length === 2) return n-1;
    let result = 0;
    for(let i = 2 ; i < res.length ; i ++){
        let d = res[i]-res[i-2]-2;
        if(d > result) result = d;
    }
    return result;
};