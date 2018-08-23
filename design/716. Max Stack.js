/*
Design a max stack that supports push, pop, top, peekMax and popMax.
push(x) -- Push element x onto stack.
pop() -- Remove the element on top of the stack and return it.
top() -- Get the element on the top.
peekMax() -- Retrieve the maximum element in the stack.
popMax() -- Retrieve the maximum element in the stack, and remove it. 
If you find more than one maximum elements, only remove the top-most one.
Example 1:
MaxStack stack = new MaxStack();
stack.push(5); 
stack.push(1);
stack.push(5);
stack.top(); -> 5
stack.popMax(); -> 5
stack.top(); -> 1
stack.peekMax(); -> 5
stack.pop(); -> 1
stack.top(); -> 5
*/

/**
 * initialize your data structure here.
  the top of maxStk may not be the same as the top of stk. Therefore, the idea here is to use tmp stack to store the element of stk until we find the max element, remove it. Then, we put the elements in tmp back to stk and maxStk. It costs O(n) in worst case.
 */
var MaxStack = function() {
    this.st = [];
    this.maxSt = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.st.push(x);
    if(this.maxSt.length=== 0 || this.maxSt[this.maxSt.length-1] <= x) {
        this.maxSt.push(x);
    }
    return;
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    var val = this.st.pop();
    if(this.maxSt[this.maxSt.length-1] === val)  this.maxSt.pop();
    return val;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    return this.st[this.st.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    return this.maxSt[this.maxSt.length - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    var val = this.maxSt[this.maxSt.length - 1];
    var tmp = [];
    while(this.st[this.st.length -1] !== val) {
        tmp.push(this.st.pop());
    }
    this.st.pop();
    this.maxSt.pop();
    while(tmp.length >0) {
        var x = tmp.pop();
        this.st.push(x);
        if(this.maxSt.length=== 0 || this.maxSt[this.maxSt.length-1] <= x) {
            this.maxSt.push(x);
        }
    }
    return val;
};

/** 
 * Your MaxStack object will be instantiated and called as such:
 * var obj = Object.create(MaxStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
