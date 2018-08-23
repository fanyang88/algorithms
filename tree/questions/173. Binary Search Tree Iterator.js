/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.
Calling next() will return the next smallest number in the BST.
Note: next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
*/

/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
Use Stack to store directed left children from root.
When next() be called, I just pop one element and process its right child as new root.
 e.g:        5
            / \
           2   7
          / \ / \
         1  3 6  13
step1 in initilize: push root and all the way to left in stack first, st= [5,2,1]
when calling next, pop st, e.g: top=1, push right of 1, st= [5,2], call next again, pop 2, st=[5,3]
     call next again, pop 5, push [7, 6] next called, pop 6, next called, pop 7, push 9 ....

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.st = [];
    this.pushAllOnLeft(root);
};

// Push root and it all the left node
BSTIterator.prototype.pushAllOnLeft = function(root) {
    var cur = root;
    while(cur !== null) {
        this.st.push(cur);
        cur = cur.left;
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.st.length !== 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    var node = this.st.pop();
    this.pushAllOnLeft(node.right);
    return node.val;
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/