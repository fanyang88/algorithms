/*
You are given two non-empty linked lists representing two non-negative integers. 
The most significant digit comes first and each of their nodes contain 
a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, 
reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 s1: [7,2,4,3]  s2: [5,6,4]
 cur = 7 cur.next = new listNode(0) cur =cur.next;
 cur = 0 cur.val = 0 ...
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var s1 = [], s2 = [];
    var cur1 = l1, cur2 = l2;
    while(cur1) {
        s1.push(cur1.val);
        cur1 = cur1.next;
    }
    while(cur2) {
        s2.push(cur2.val);
        cur2 = cur2.next;
    }
    var cur= new ListNode(0), carry = 0;
    while(s1.length > 0 || s2.length > 0) {
        var sum = s1.length > 0 ? s1.pop() : 0;
        sum += s2.length > 0 ? s2.pop() : 0;
        sum += carry;
        cur.val = sum % 10;
        carry = ~~(sum / 10);
        var head = new ListNode(0);
        head.next = cur;
        cur = head;
    }
    
    if(carry ===1)  head.val = 1;
    return head.val ===0 ? head.next : head;
};