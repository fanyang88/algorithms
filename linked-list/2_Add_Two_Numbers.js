/*
You are given two linked lists representing two non-negative numbers. 
The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 
 // add number from left to right
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(-1), node= head, carrier = 0;

    while(l1!==null || l2!==null) {
        var l1Val = (l1 == null) ? 0 : l1.val;
        var l2Val = (l2 == null) ? 0 : l2.val;
        
        var nextVal = (l1Val + l2Val + carrier) % 10;
        node.next = new ListNode(nextVal);
        node =  node.next;
        
        if((l1Val + l2Val + carrier) >= 10) {
            carrier =1;
        }
        else {
            carrier =0;
        }
        
        if (l1 !== null) l1= l1.next;
        if (l2 !== null) l2= l2.next;
    }
    
    if(carrier > 0) {
        node.next = new ListNode(1);
    }
    return head.next;
};
