/*
Given a linked list, swap every two adjacent nodes and return its head.

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
Note:

Your algorithm should use only constant extra space.
You may not modify the values in the list's nodes, only nodes itself may be changed.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    var dummy = new ListNode(0);
    dummy.next = head;
    var cur = head;
    var prev = dummy;
    while(cur && cur.next) {
        var next = cur.next;
        var nextP = next.next;
        prev.next = next;
        next.next = cur;
        cur.next = nextP;
        prev = cur;
        cur = cur.next;
    }
    return dummy.next;
};
