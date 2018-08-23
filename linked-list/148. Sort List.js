// Sort a linked list in O(n log n) time using constant space complexity.

/*
Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
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
 use merge sort
 */
var sortList = function(head) {
    if(!head || !head.next)  return head;
    var prev= null, slow = head, fast = head;
    // step 1. cut the list to two halves
    while(fast && fast.next) {
        prev= slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // now slow point to the first node in second half of list, 
    // prev point to the end of first half list
    prev.next = null;
    
    // step 2. sort each half
    var l1 = sortList(head);
    var l2 = sortList(slow);
    
    // step 3. merge l1 l2
    return merge(l1, l2);
   
};

var merge = function(l1, l2) {
    var dummy = new ListNode(0), cur = dummy;
    while(l1 && l2) {
        if(l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    if(l1) cur.next = l1;
    if(l2) cur.next = l2;

    return dummy.next;
};
