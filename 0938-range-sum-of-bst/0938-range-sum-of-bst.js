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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    function Calc(u){
        let res = 0;
        if(u.val >= low && u.val <= high)
            res += u.val;
        if(u.left !== null) res += Calc(u.left);
        if(u.right != null) res += Calc(u.right);
        return res;
    }
    return Calc(root);
};