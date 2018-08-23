/*
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
You should preserve the original relative order of the nodes in each of the two partitions.

Example:
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 
 the basic idea is to maintain two queues, the first one stores all nodes with val less than x , and the second queue stores all the rest nodes. Then concat these two queues. Remember to set the tail of second queue a null next, or u will get TLE.
 */
var partition = function(head, x) {
    var l1 = new ListNode(0), l2 = new ListNode(0);
    var p1 = l1, p2= l2;
    var cur = head;
    while(cur) {
        if(cur.val < x) {
            p1.next = cur;
            p1 = cur;
        } else {
            p2.next = cur;
            p2 = cur;
        }
        cur = cur.next;
    }
    p2.next = null;
    p1.next = l2.next;
    return l1.next;
};