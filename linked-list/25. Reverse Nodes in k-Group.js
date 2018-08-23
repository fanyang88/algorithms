/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.

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
 * @param {number} k
 * @return {ListNode}
 
  // slice into m list each has length <= k
    // reverse each sliced list 
    // connect all sliced list together
 */
var reverseKGroup = function(head, k) {
    var cur = head, prev = null, count = 0, st= [head], dummy = new ListNode(0), node = dummy;
    while(cur) {
        prev = cur;
        cur = cur.next;
        count++;
        if(count ===k) {
            prev.next = null;
            st.push(cur);
            count = 0;
        }
    }
    for(var list of st) {
        if(!list)  continue;
        // reverse each list
        node.next = reverse(list, k);
        node = node.next;
        while(node.next) {
            node = node.next;
        }
    }
    return dummy.next;
};

var reverse = function(head, k) {
    // check length first, if length < k don't reverse
    var cur = head, len = 0, next = head.next, prev= null;
    while(cur) {
        cur = cur.next;
        len++;
    }
    if(len <k)  return head;
    cur = head;
    while(next) {
        var nextN = next.next;
        cur.next = prev;
        next.next = cur;
        prev = cur;
        cur = next;
        next = nextN;
    }
    return cur;
};
