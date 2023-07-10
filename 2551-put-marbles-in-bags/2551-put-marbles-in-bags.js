/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    let n = weights.length, res = [];
    if(k === 1) return 0;
    for(let i = 1 ; i < n ; i ++){
        res[i-1] = weights[i]+weights[i-1];
    }
    res.sort((a,b)=>a-b);
    let result = 0;
    for(let i = 0 ; i < k-1 ; i ++){
        result += res[n-2-i];
        result -= res[i];
    }
    return result ;
};