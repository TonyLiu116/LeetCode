/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let zero = [];
    let one = [];
    let z = 0;
    let n = 0;
    for(let i = 0 ; i < s.length ; i ++){
        if(s[i] === '0') {
            z ++;  
        }
        zero.push(z);
        if(s[s.length-i-1] === '1'){
            n ++;
        }
        one.unshift(n);
    }
    let result = 0;
    for(let i = 0 ; i < s.length-1 ; i ++){
        if(zero[i]+one[i+1] > result) result = zero[i]+one[i+1]
    }
    return result;
};