/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
    let resT = [], resF = [], n = answerKey.length;
    resT.push(-1);
    resF.push(-1);
    for(let i = 0 ; i < n ; i ++){
        if(answerKey[i] === 'T') resT.push(i);
        else resF.push(i);
    }
    resT.push(n);
    resF.push(n);
    if(resT.length <= k+2) return n;
    if(resF.length <= k+2) return n;
    let lenT = resT.length, lenF = resF.length, result = 0;
    for(let i = k+1 ; i < lenT ; i ++){
        if(resT[i]-resT[i-k-1] > result)
            result = resT[i]-resT[i-k-1]-1
    }
    for(let i = k+1 ; i < lenF ; i ++){
        if(resF[i]-resF[i-k-1] > result)
            result = resF[i]-resF[i-k-1]-1
    }
    return result;
};