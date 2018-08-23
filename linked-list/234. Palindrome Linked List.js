/*
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true

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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next)  return true;
    var prev= null, slow = head, fast = head, l1 = head;
    
    // step 1. cut the list to two halves
    while(fast && fast.next) {
        prev= slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    
    // now slow point to the first node in second half of list, 
    // prev point to the end of first half list
    prev.next = null;
    
    // reverse second half of linklist with head slow
    var l2 = reverseList(slow);
    while(l1 && l2) {
        if(l1.val !== l2.val)  return false;
        l1 = l1.next;
        l2 = l2.next;
    }
    return true;
};

var reverseList = function(head) {
    if(!head) return head;
    var newHead = null, cur = head, next, pre = null;
    while(cur) {
        //For the first time, assign newhead 
        if(cur) newHead = cur;
        next = cur.next;
        cur.next= pre;
        pre = cur;
        cur = next;
    }
    return newHead;
};
