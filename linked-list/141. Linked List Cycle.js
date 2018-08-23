// Given a linked list, determine if it has a cycle in it.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    var fast = head, slow = head;
    while(true) {
        fast = fast.next;
        if(!fast) break;
        fast = fast.next;
        if(!fast) break;
        slow = slow.next;
        if(fast === slow) {
            return true;
        }
    }
    return false;
};
