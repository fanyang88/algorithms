//Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * get the mid first to be root, root.left = mid left, root.right = mid right
 * use binary search on array
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
    return helper(0, nums.length-1);
   
    function helper(start, end) {
        if(start > end) return null;
        let mid= parseInt((start+end)/2);  // parseInt is the key
        let node = new TreeNode(nums[mid]);
        node.left = helper(start, mid-1);
        node.right = helper(mid+1, end);
        return node;
    }
};
