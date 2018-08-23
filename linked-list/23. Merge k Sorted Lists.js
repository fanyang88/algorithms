// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return lists;
    var arr = [], head = new ListNode(-1), cur, node = head;
    for(var cur of lists) {
        while(cur) {
            var next= cur.next;
            cur.next = null;
            arr.push(cur);
            cur = next;
        }
    }
    arr.sort(function(a, b){
        return a.val-b.val;
    });
    if(arr.length === 0) return [];
    var cur = head;
    for(var node of arr) {
        cur.next= node;
        cur = cur.next;
    }
    return head.next;
};

