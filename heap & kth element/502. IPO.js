/*
Suppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most k distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most k distinct projects.
You are given several projects. For each project i, it has a pure profit Pi and a minimum capital of Ci is needed to start the corresponding project. Initially, you have W capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.
To sum up, pick a list of at most k distinct projects from given projects to maximize your final capital, and output your final maximized capital.

Example 1:
Input: k=2, W=0, Profits=[1,2,3], Capital=[0,1,1].
Output: 4

Explanation: Since your initial capital is 0, you can only start the project indexed 0.
             After finishing it you will obtain profit 1 and your capital becomes 1.
             With capital 1, you can either start the project indexed 1 or the project indexed 2.
             Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.
             Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.
Note:
You may assume all numbers in the input are non-negative integers.
The length of Profits array and Capital array will not exceed 50,000.
The answer is guaranteed to fit in a 32-bit signed integer.
*/

/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 just use a priority queue, [capital, profit]
 in above case it would be: [[0, 1], [1, 2], [1, 3]]
 k=0, W=0, push 1 to pq: [1] since only the first one qualified, W=1
 k=1, W=1, push 2, 3 to pq, W=1+3
 each time we add the top of pq to W
 */

function MaxHeap() {
    this.data = [];
}

MaxHeap.prototype.insert= function(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length-1);
};

MaxHeap.prototype.bubbleUp = function(index) {
    while(index > 0) {
        var parent = ~~((index+1)/2) -1;
        if(this.data[parent] < this.data[index]) {
            var temp = this.data[parent];
            this.data[parent] = this.data[index];
            this.data[index] = temp;
        }
        index = parent;
    }
};

MaxHeap.prototype.getMax = function() {
    var val = this.data[0];
    if(this.data.length === 1) {
        this.data.pop();
    } else {
        this.data[0] = this.data.pop(); //move last one to first position. The key!!!!
        this.bubbleDown(0);
    }
    return val;
};

MaxHeap.prototype.bubbleDown = function(parent) {
    while(true) {
        var child = (parent+1)*2;
        var sibling = child -1;
        var toSwap = null;
        if(this.data[child] && this.data[child] > this.data[parent]) {
            toSwap = child;
        }
        if(this.data[sibling] && this.data[sibling] > this.data[parent] &&
           (!this.data[child] || this.data[sibling] > this.data[child]) ) {
            toSwap = sibling;
        }
        if(toSwap === null)  break;
        var temp = this.data[toSwap];
        this.data[toSwap] = this.data[parent];
        this.data[parent] = temp;
        parent = toSwap;
    }
};

var findMaximizedCapital = function(k, W, Profits, Capital) {
    var cp = [], j=0, maxHeap = new MaxHeap();
    for(var i=0; i<Profits.length; i++) {
        cp.push([Capital[i], Profits[i]]);
    }
    cp.sort((a, b)=> {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });
    
    for(var i=0; i<k; i++) {
        while(j<cp.length && cp[j][0] <= W)  maxHeap.insert(cp[j++][1]);
       
        // There is no profit can be earned, directly return W;
        // e.g: W=0, and profit=[1,2,3] capital=[1,1,2]
        if(maxHeap.data.length ===0)  return W;
        
        W += maxHeap.getMax();
    }
    return W;
};
