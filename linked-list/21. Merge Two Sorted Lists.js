/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    var merged = new ListNode(0);
    if(!l1) return l2;
    if(!l2) return l1;
    var p1 = l1, p2 = l2, cur = merged;
    while (p1 && p2) {
        if(p1.val < p2.val) {
            cur.next = p1;
            p1 = p1.next;
        } else {
            cur.next = p2;
            p2 = p2.next;
        }
        cur = cur.next;
    } 
    while(p1) {
        cur.next = p1;
        p1 = p1.next;
        cur = cur.next;
    }
    
    while(p2) {
        cur.next = p2;
        p2 = p2.next;
        cur = cur.next;
    }
    return merged.next;
};
