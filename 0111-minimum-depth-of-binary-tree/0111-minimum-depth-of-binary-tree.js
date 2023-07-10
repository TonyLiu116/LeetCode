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
 * @return {number}
 */
var minDepth = function(root) {
    let result = Infinity;
    function DFS(v, d){
        if(v === null) return;
        if(v.left === null && v.right === null && result > d)
            result = d;
        if(v.left !== null) DFS(v.left, d+1);
        if(v.right !== null) DFS(v.right, d+1);
    }
    DFS(root, 1);
    if(result === Infinity)
        result = 0;
    return result;
};