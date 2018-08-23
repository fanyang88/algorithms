/*
Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.

You may assume each number in the sequence is unique.

Consider the following binary search tree: 

     5
    / \
   2   6
  / \
 1   3
Example 1:

Input: [5,2,6,1,3]
Output: false
Example 2:

Input: [5,2,1,3,6]
Output: true
*/

/*
Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree./**
 * @param {number[]} preorder
 * @return {boolean}
 
   e.g:     20
            /  \
           10  30
          / \  / \
         5  15 25  35
        / \         \
       1   7        40
       using stack: the preorder is: 20-10-5-1-7-15-30-25-35-40
       st.push(20), since 10<20. keep push till: meet 7, st=[20, 10, 5, 1]
       since 7 >1, 5, pop, 1, 5, root=5, st=[20, 10, 7] however if next incoming value(parent right) < root(parent left), return false; 
       since 15>7, pop 7, 10, root= 10, push 15, st=[20, 15] ...
       
 */
var verifyPreorder = function(preorder) {
    var st= [],  root=null;
    if(preorder.length ===0)  return true;
    
    for(var i=0; i<preorder.length; i++) {
        var newVal = preorder[i];
        while(st.length >0 && st[st.length-1] < newVal) {
            root = st.pop();
        }
        if(root > newVal) return false;
        st.push(newVal);
    }
    return true;
};
