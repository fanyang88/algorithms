/*
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 
 //Find the middle of the list
 //Reverse the half after middle  1->2->3->4->5->6 to 1->2->3->6->5->4
 // start merge     
 */
var reorderList = function(head) {
    if(!head || !head.next)  return;
    var fast = head, slow = head, prev = null;
    while(fast && fast.next) {
        fast = fast.next.next;
        prev = slow;
        slow = slow.next;
    }
    // slow point to the middle, reverse slow to the end
    prev.next = null;
    var newPrev = null, cur = slow;
    while(cur) {
        var next = cur.next;
        cur.next = newPrev;
        newPrev = cur;
        cur = next;
    }
  
    var cur1 = head, cur2= newPrev;//  point to the second half list
    while(cur2.next && cur1.next) {
        var next2 = cur2.next;
        var next1 = cur1.next;
        cur1.next = cur2;
        cur2.next = next1;
        cur1 = next1;
        cur2 = next2;
    }
    cur1.next = cur2;
};