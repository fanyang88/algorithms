/*
Implement FreqStack, a class which simulates the operation of a stack-like data structure.

FreqStack has two functions:

push(int x), which pushes an integer x onto the stack.
pop(), which removes and returns the most frequent element in the stack.
If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.
 
Example 1:
Input: 
["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
Output: [null,null,null,null,null,null,null,5,7,5,4]
Explanation:
After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

pop() -> returns 5, as 5 is the most frequent.
The stack becomes [5,7,5,7,4].

pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
The stack becomes [5,7,5,4].

pop() -> returns 5.
The stack becomes [5,7,4].

pop() -> returns 4.
The stack becomes [5,7].
*/


//[5,7,5,7,4,5]
/*
push 5, since 5 is not exist in map, push 5 into stack[1] map 5:1
push 7, since 7 is not exist in map, push 7 into stack[1] map 7:1
push 5, since 5 is exist in map, and its frequency=1 add 5 into stack[2]
push 7, since 7 is exist in map, and its frequency=1 add 7 into stack[2]: [5, 7]
push 4, since 4 is not exist in map, push 4 into stack[1] map 4:1  stack[1]: [5,7,4]
push 5, since 5 is exist in map, and its frequency=2 add 5 into stack[3]: [5]
pop: from stack[3]=5 
pop: since stack[3] is empty, goes to stack[2], pop: 7
pop: goes to stack[2], pop: 5
pop: since stack[2] is empty, goes to stack[1], pop: 4
*/

var FreqStack = function() {
    this.stacks = [];
    this.map = {};
    this.level=0;
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(!this.map[x]) {
        this.map[x] = 0;
    }
    this.map[x] ++;
    const freq = this.map[x];
    if(!this.stacks[freq]) {
        this.stacks[freq] = [];
        this.level++;
    }  
    this.stacks[freq].push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    var i= this.level;
    while(this.stacks[i].length ===0)  i--;
    var val = this.stacks[i].pop();
    this.map[val]--;
    return val;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */
