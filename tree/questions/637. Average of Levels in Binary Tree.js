/*
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
*/

var averageOfLevels = function(root) {
    var st = [], res= [];
    st.push(root);
    while(st.length > 0) {
        var len = st.length, count = 0, sum=0;
        while(count < len) {
            let node = st.shift();
            sum += node.val;
            count++;
            if(node.left) st.push(node.left);
            if(node.right) st.push(node.right);
        }
        
    res.push(sum/len);
    }
    return res;
};
