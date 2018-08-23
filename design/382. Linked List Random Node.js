/*
Given a singly linked list, 
return a random node's value from the linked list. 
Each node must have the same probability of being chosen.

Follow up:
What if the linked list is extremely large and its length is unknown to you? 
Could you solve this efficiently without using extra space?

Example:

// Init a singly linked list [1,2,3].
ListNode head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
Solution solution = new Solution(head);

// getRandom() should return either 1, 2, or 3 randomly. 
Each element should have equal probability of returning.
solution.getRandom();
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 
 When we read the first node head, if the stream ListNode stops here, we can just return the head.val. The possibility is 1/1.

When we read the second node, we can decide if we replace the result r or not. The possibility is 1/2. So we just generate a random number between 0 and 1, and check if it is equal to 1. If it is 1, replace r as the value of the current node, 
otherwise we don't touch r, so its value is still the value of head.

When we read the third node, now the result r is one of value in the head or second node. We just decide if we replace the value of r as the value of current node(third node). The possibility of replacing it is 1/3, 
namely the possibility of we don't touch r is 2/3. So we just generate a random number between 0 ~ 2, 
and if the result is 2 we replace r.
We can continue to do like this until the end of stream ListNode.
 */
var Solution = function(head) {
    this.head = head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    var cur = this.head, r=cur.val; 
    for(var len=1; cur.next !== null; len++) {
        cur = cur.next;
        // generate number from 0 to len
        var rand = parseInt(Math.random() * (len+1));
        // when len = 1, it can return 0 or 1, if it return 1, replace the 
        if(rand === len) {
            r = cur.val;
        }  
    }
    
    return r;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */