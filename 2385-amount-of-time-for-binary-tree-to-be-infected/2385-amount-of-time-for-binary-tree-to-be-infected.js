/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} start
 * @return {number}
 */
var amountOfTime = function(root, start) {
    
    let result = 0;
    let flag = [];
    
    function Calc(u, deep){
        if(flag[u.val]) return ;
        flag[u.val] = 1;
        if(deep > result) result = deep;
        if(u.left !== null) Calc(u.left, deep+1);
        if(u.right !== null) Calc(u.right, deep+1);
        if(u?.parent) Calc(u.parent, deep+1);
    }
    
    function BFS(u, parent){
        if(parent !== null){
            u['parent'] = parent;
        }
        if(u.val == start){
            Calc(u, 0);
            return ;
        }
        else {
            if(u.left !== null) BFS(u.left, u);
            if(u.right !== null) BFS(u.right, u);
        }
    }
    BFS(root, null);
    return result;
};