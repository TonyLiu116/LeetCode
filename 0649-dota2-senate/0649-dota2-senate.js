/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let vis = [];
    let st = 0, en = 0;
    let n = senate.length;
    while(1){
        st %= n;
        if(vis[st]){
            st ++ ;
            continue ;
        }
        let tp = en ;
        en ++;
        while(1){
            en %= n;
            if(en === tp){
                if(senate[st] === 'R') return "Radiant";
                else return "Dire";
            }
            if(vis[en] || senate[st] === senate[en]){
                en ++;
                continue ;
            }
            vis[en] = 1;
            break ;
        }
        st ++ ;
    }
};