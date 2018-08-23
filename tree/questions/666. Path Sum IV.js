/*
If the depth of a tree is smaller than 5, 
then this tree can be represented by a list of three-digits integers.
For each integer in this list:
The hundreds digit represents the depth D of this node, 1 <= D <= 4.
The tens digit represents the position P of this node in the level it belongs to, 1 <= P <= 8. 
The position is the same as that in a full binary tree.
The units digit represents the value V of this node, 0 <= V <= 9.
Given a list of ascending three-digits integers representing a binary with the depth smaller than 5. 
You need to return the sum of all paths from the root towards the leaves.

Example 1:
Input: [113, 215, 221]
Output: 12
Explanation: 
The tree that the list represents is:
    3
   / \
  5   1
The path sum is (3 + 5) + (3 + 1) = 12.
Example 2:
Input: [113, 221]
Output: 4
Explanation: 
The tree that the list represents is: 
    3
     \
      1
The path sum is (3 + 1) = 4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 How do we solve problem like this if we were given a normal tree? Yes, traverse it, keep a root to leaf running sum. 
 If we see a leaf node (node.left == null && node.right == null), we add the running sum to the final result.

We can form a tree using a HashMap. The key is first two digits which marks the position of a node in the tree. The value is value of that node. Thus, we can easily find a node's left and right children using math.

Formula: For node xy?, e.g: 113
its left child is (x+1)(y*2-1)? and right child is (x+1)(y*2)?

 remember to add parseInt whenever we did division.
 */
var pathSum = function(nums) {
    var map = {}, sum= [0];
    for(var num of nums) {
        var key = parseInt(num /10);
        var value = num % 10;
        map[key] = value;
    }
    
    getSum(map, nums[0]/10, sum, 0);
    return sum[0];
};

var getSum = function(map, root, sum, curSum) {
    root = parseInt(root);
    var depth  = parseInt(root/10);
    var pos = root % 10;
    var left = (depth+1) * 10 + pos*2 -1;
    var right = left +1;
    curSum += map[root];
    
    if(map[left]=== undefined && map[right] === undefined) {
        sum[0] += curSum;
        return;
    }
    if(map[left] !== undefined)  getSum(map, left, sum, curSum);
    if(map[right] !== undefined) getSum(map, right, sum, curSum);
}
