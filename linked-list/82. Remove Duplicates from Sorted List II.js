/*
Given a sorted linked list, delete all nodes that have duplicate numbers, 
leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3

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
var deleteDuplicates = function(head) {
    // use a map to store all the dups first
    var hash = {}, dummy = new ListNode('dummy');
    dummy.next = head;
    var cur = dummy;
   
    while(cur) {
        hash[cur.val] = hash[cur.val] ? hash[cur.val]+1 :1;
        cur = cur.next;
    }
    
    cur = dummy;
    var next= cur.next;
    while(cur) {
        while(next && hash[next.val] > 1) {
            next = next.next;
        }
        
        cur.next= next;
        if(!next)  {
            break;
        }
        cur = next;
        next = cur.next;
    }
    return dummy.next;
};
