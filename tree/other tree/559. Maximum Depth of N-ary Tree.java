/*
Given a n-ary tree, find its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
For example, given a 3-ary tree:
We should return its max depth, which is 3.
*/

/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    public int maxDepth(Node root) {
        if(root == null)  return 0;
        int maxD = 0;
        for(Node child : root.children) {
            maxD = Math.max(maxDepth(child), maxD);
        }
        return maxD+1;
    }
}
