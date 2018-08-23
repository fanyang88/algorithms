/*
Given a root node reference of a BST and a key, delete the node with the given key in the BST. 
Return the root node reference (possibly updated) of the BST.
Basically, the deletion can be divided into two stages:
Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).
Example:   root = [5,3,6,2,4,null,7]
key = 3
    5
   / \
  3   6
 / \   \
2   4   7
Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the following BST.
    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].
    5
   / \
  2   6
   \   \
    4   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 
 if to be deleted node has no child, directly deleted
 if to be deleted node has only one child, the precessor directly connect to the children
 if to be deleted node has two children:
    we can either find the minum from its right sub tree, and fill the value with the to-be-deleted node, and delete the node with the mimum value in its right sub tree- this must be the left leaf of the right sub tree.
    we can find the maxum from its left sub tree, fill the max value into the to-be-deleted node, and delete the node with the max value in its left sub tree- this must be the right leaf of the left sub tree.
 */


// METHOD 1: delete min in right sub tree.
var deleteNode = function(root, key) {
    if(!root)  return null;
    // find the target node first
     // if target smaller then root, delete it in the left sub tree
    else if(root.val > key)  root.left= deleteNode(root.left, key); 
    // if target larger then root, delete it in the right sub tree
    else if(root.val < key)  root.right= deleteNode(root.right, key);
    // Now we find the target
    else {
        // has no children
        if(!root.left && !root.right) {   
            return null;
        }
        //  has only one children
        if(!root.left) {
            return root.right;
        }
        if(!root.right) {  // root.left would the the left sub 
            return root.left;
        }
        // has two children
        var minV = findMin(root.right);
        root.val = minV;
        root.right = deleteNode(root.right, minV);
        return root;
    }
    // THIS IS THE KEY don't forget
    return root;
};

var findMin = function(root) {
    while(root.left)  root= root.left;
    return root.val;
};

// METHOD 2: delete max in left sub tree.
var deleteNode = function(root, key) {
    if(!root)  return null;
    else if(root.val > key)  root.left = deleteNode(root.left, key);
    else if(root.val < key)  root.right = deleteNode(root.right, key);
    else {
        // found the target node
        // if there is no children
        if(!root.left && !root.right) {
            return null;
        }
        // has only one children
        if(!root.left) {
            return root.right;
        }  
        if(!root.right) {
            return root.left;
        }
        // has two children
        var maxV = findMax(root.left);
        root.val = maxV;
        root.left = deleteNode(root.left, maxV);
        return root;
    }
    return root;
    
};

var findMax = function(root) {
    while(root.right)  root= root.right;
    return root.val;
};
