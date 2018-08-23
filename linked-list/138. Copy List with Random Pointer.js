// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
// Return a deep copy of the list.

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
  __________
 |          |random
 1 -> 2 -> 3 -> 4 ...
 
 step1: we need to make the list to be:
   __________________
 |                   |random
 1 -> 1`-> 2 -> 2`-> 3 -> 3`-> 4-> 4`...
 
 step2: copy the random pointer: cur.next.random = cur.random.next;
 _____________________
 |                   |random
 1 -> 1`-> 2 -> 2`-> 3 -> 3`-> 4-> 4`...
 cur  |___________________|
 
 step3 : split list to two list
 */
var copyRandomList = function(head) {
    if(!head)  return head;
    var cur = head;
    // step1, add copy node after each node
    while(cur) {
        var next = cur.next;
        var newNode = new RandomListNode(cur.label);
        cur.next = newNode;
        newNode.next = next;
        cur = next;
    }
    // Step2 : copy random pointer
    cur = head;
    while(cur) {
        cur.next.random = cur.random ? cur.random.next : null;
        cur = cur.next.next;
    }
    // Step3, split
    cur = head;
    var copyHead = head.next, copyCur = copyHead;
    while(cur) {
        cur.next = copyCur.next;
        cur= cur.next;  // deal with original list first
        copyCur.next = cur ? cur.next : null;
        copyCur = copyCur.next;
    }
    return copyHead;
};
