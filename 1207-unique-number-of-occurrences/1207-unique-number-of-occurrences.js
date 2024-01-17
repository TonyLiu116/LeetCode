/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let len = arr.length;
    let count = [];
    for(let i = 0 ; i < len ; i ++){
        let n = arr[i];
        if(n < 0) n += 3000;
        if(count[n] === undefined) count[n] = 0;
        count[n] ++;
    }
    let flag = [];
    for(let i = 0 ; i < 3001 ; i ++){
        if(count[i]){
            if(flag[count[i]]) return false;
            flag[count[i]] = 1;
        }
    }
    return true;
};