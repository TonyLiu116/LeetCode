/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    let check = [];
    let S = [];
    for(let i = 2 ; i*i <= n ; i ++){
        if(check[i]) continue ;
        S.push(i);
        for(let j = i*i ; j*j <=n ; j += i)
            check[j] = 1;
    }
    let count = S.length;
    let res = 0;
    function DFS(step, v){
        if( step >= count || v * S[step] * S[step] > n ) return ; 
        while(1){
            DFS(step+1, v);
            v = v * S[step] * S[step];
            if(v > n) break;
            res ++;
        }
    }
    DFS(0, 1);
    if(n > 0) res ++;
    return res;
};