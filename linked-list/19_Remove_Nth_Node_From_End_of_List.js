/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 * 
 * 
 * [1,2,3,4] ， n = 2，fast = [1,2,3,4] ， slow = [0,1,2,3,4] (0 is the dummy head)
 * n = 2，fast goes 2 steps，fast = [3,4]，slow = [2,3,4]
 * afterwards, fast, slow go at the same pace, when fast = null，slow = [2,3,4]，slow point to the pervious node next to the node to be deleted

 */
var removeNthFromEnd = function(head, n) {
    if(head === null) return head; 
    var fast = head, node = new ListNode(0);
    node.next = head;
    var slow  = node;
    while(n >0) {
        n --;
        fast = fast.next;
    }
    while(fast) {
        fast = fast.next;
        slow = slow.next;
    }
    //Delete node after slow pointer
    if(slow.next) {
        slow.next= slow.next.next;
    }
    else {
        slow.next = null;
    }
    return node.next;
    
};
