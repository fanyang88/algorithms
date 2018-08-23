/*
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummy = new ListNode(val+1);
    dummy.next= head;
    var head = dummy, cur = dummy;
    while(cur) {
        if(cur.next && cur.next.val === val) {
            var next = cur.next;
            while(next && next.val === val) next=  next.next;
            cur.next = next;
        }
        cur = cur.next;
    }
    return head.next;
};