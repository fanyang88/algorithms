//Reverse a singly linked list.
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
 * 
 *          1 -> 2 -> 3
    null <- 1 -> 2 -> 3
    null <- 1 <- 2 -> 3 
 */
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
