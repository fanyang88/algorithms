/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
Note: Do not modify the linked list.
Follow up:
Can you solve it without using extra space?
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
var detectCycle = function(head) {
    if(!head)  return null;
    var fast  = head, slow = head;
    while(true) {
        fast = fast.next;
        if(!fast)  break;
        fast = fast.next;
        if(!fast)  break;
        
        slow = slow.next;
       // if(!slow)  break;
        if(fast === slow)  break;
    }
    if(!fast)  return null;
    slow = head;
    // move slow to head, each for one step again
    while(fast !== slow) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
};
