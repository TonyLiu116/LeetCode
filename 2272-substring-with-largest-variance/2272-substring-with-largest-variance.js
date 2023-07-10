/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    let n = s.length, vis = [], alphas = [], result = 0;
    for(let i = 0 ; i < n ; i ++){
        if(vis[s[i]]) continue ;
        alphas.push(s[i]);
        vis[s[i]] = 1;
    }
    if(alphas.length === 1) return 0;
    for(let a = 0 ; a < alphas.length-1 ; a ++){
        for(let b = a+1 ; b < alphas.length ; b ++){
            let res = '';
            for(let i = 0 ; i < n ; i ++)
                if(s[i] === alphas[a] || s[i] === alphas[b])
                    res += s[i];
            let countA = 0, flagA = 1, countB = 0, flagB = 1, len = res.length;
            for(let i = 0 ; i < len ; i ++){
                if(res[i] === alphas[a]){
                    if(countB){
                        countB --;
                        flagB = 0;
                    }
                    else flagB = 1;
                    countA ++;
                    if(countA-flagA > result) result = countA-flagA;
                }   
                else{
                    if(countA){
                        countA --;
                        flagA = 0;
                    }
                    else flagA = 1;
                    countB ++;
                    if(countB-flagB > result) result = countB-flagB;
                }
            }
        }
    }
    return result;
};