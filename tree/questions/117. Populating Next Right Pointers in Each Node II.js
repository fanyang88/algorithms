/*
Given a binary tree

struct TreeLinkNode {
  TreeLinkNode *left;
  TreeLinkNode *right;
  TreeLinkNode *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

Note:

You may only use constant extra space.
Recursive approach is fine, implicit stack space does not count as extra space for this problem.
Example:

Given the following binary tree,

     1
   /  \
  2    3
 / \    \
4   5    7
After calling your function, the tree should look like:

     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \    \
4-> 5 -> 7 -> NULL

*/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 
 parent:                3        4
                      /   \     /   \
  childHead:          2   5     6   7
  loop parent:
  if chidlHead = null and parent.left  childHead = left child = parent.left;
  if chidlHead!= null and parent.left  e.g: child at 5 and parent at 4, child.next = parent.left  5->6
  
  if chidlHead = null and parent.right  childHead = right child = parent.right;
  if chidlHead!= null and parent.right  e.g: child at 2 and parent at 3, child.next = parent.right  2->5
  
 */
var connect = function(root) {
    var parent = root, child = null, childHead = null;
    while(parent) {
         while(parent) {
             if(parent.left) {
                 if(!childHead) {
                     childHead = parent.left;
                     child = parent.left;
                 } else {
                     child.next = parent.left;
                     child = child.next;
                 }
             }
              if(parent.right) {
                 if(!childHead) {
                     childHead = parent.right;
                     child = parent.right;
                 } else {
                     child.next = parent.right;
                     child = child.next;
                 }
             }
             parent = parent.next;
         }
        parent = childHead; // next level
        child = null;
        childHead = null;
    }
};
