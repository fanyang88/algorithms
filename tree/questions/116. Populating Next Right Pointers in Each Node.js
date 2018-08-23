/*
Given a binary tree

    struct TreeLinkNode {
      TreeLinkNode *left;
      TreeLinkNode *right;
      TreeLinkNode *next;
    }
Populate each next pointer to point to its next right node. 
If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL.
Note:
You may only use constant extra space.
You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).
For example, Given the following perfect binary tree,
         1
       /  \
      2    3
     / \  / \
    4  5  6  7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
*/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 
  *      1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \  / \
    4->5->6->7 -> NULL
  1->next= null
  2->next=3
  3->next=null
  4->next=5
  5->next=6
  6->next=7
  7->next=null
  so root->left->next= root->right
     root->right->next= root->next->left
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if(!root)  return;
    root.next = null;
    dfs(root);
};

var dfs = function(root) {
    if(!root) return;
    if(root.left) 
      root.left.next= root.right || null;
    if(root.right)  
      root.right.next= root.next ? root.next.left : null;
    dfs(root.left);
    dfs(root.right);
    return;
};


// Iterative version
var connect = function(root) {
    var cur =root, pre = root;
    while(pre) {
        cur = pre;
        while(cur) {
            if(cur.left) cur.left.next = cur.right;
            if(cur.right) cur.right.next = cur.next ? cur.next.left : null;
            cur = cur.next;
        }
        pre= pre.left;
    }
};
