/*
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
Example 1:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
Given tree t:
   4 
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.
Example 2:
Given tree s:
     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2
Return false.
*/
// Naive method 
var isSubtree = function(s, t) {
    var arrS = preorder(s, []);
    var arrT = preorder(t, []);
    return arrS.join('').indexOf(arrT.join('')) > -1 ? true : false;
};

var preorder = function(node, arr) {
    if(node) {
        arr.push('*'+node.val);
        preorder(node.left, arr);
        preorder(node.right, arr);
    } else {
        arr.push('#');
    }
    return arr;
}

// method 2
var isSubtree = function(s, t) {
    if(!s)  return false;
    if(isSame(s, t))  return true;
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};

var isSame = function(root1, root2) {
    if(!root1 && !root2) return true;
    if((!root1 && root2) || (root1 && !root2))  return false;
    if(root1.val !== root2.val)  return false;
    return isSame(root1.left, root2.left) && isSame(root1.right, root2.right);
}
