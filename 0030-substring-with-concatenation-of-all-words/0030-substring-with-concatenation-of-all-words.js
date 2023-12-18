/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let wLen = words[0].length;
    let flag = {};
    let result = [];
    for(let i = 0 ; i < words.length ; i ++){
        if(!flag[words[i]])
            flag[words[i]] = 1;
        else
            flag[words[i]] ++;
    }
    for(let sp = 0 ; sp < wLen ; sp ++){
        let store = {...flag};
        let rCount = 0;
        let track = [];
        for(let i = sp ; i < s.length ; i += wLen){
            let subS = s.slice(i, i+wLen);
            if(store[subS] === undefined){
                store = {...flag};
                rCount = 0;
                track = [];
            }
            else{
                if(store[subS] == 0){
                    let idx = track.indexOf(subS);
                    for(let p = 0 ; p < idx+1 ; p ++){
                        store[track[p]]++;
                        rCount --;
                    }
                    track = track.slice(idx+1);
                }                
                store[subS] --;
                rCount ++;
                track.push(subS);
                if(rCount == words.length){
                    result.push(i-wLen*words.length+wLen);
                }
            } 
        }
    }
    return result
};