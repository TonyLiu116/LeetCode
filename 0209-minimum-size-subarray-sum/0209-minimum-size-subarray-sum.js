/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let n = nums.length, i , j , s = 0, e = 0, result = Infinity;
    for(i = 0 ; i < n ; i = j){
        while(e < n){
            s += nums[e];
            if(s >= target) break ;
            e ++;
        }
        if(e === n) break;
        for(j = i ; j <= e ; j ++){
            if(s >= target){
                if(result > e-j+1) result = e-j+1;
                s -= nums[j];
            }
            else break;
        }
        e++;
    }
    if(result === Infinity) return 0;
    return result;
};