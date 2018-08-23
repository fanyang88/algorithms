/*
You have k lists of sorted integers in ascending order. Find the smallest range that includes at least one number from each of the k lists.
We define the range [a,b] is smaller than range [c,d] if b-a < d-c or a < c if b-a == d-c.
Example 1:
Input:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
Output: [20,24]
Explanation: 
List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
List 2: [0, 9, 12, 20], 20 is in range [20,24].
List 3: [5, 18, 22, 30], 22 is in range [20,24].
Note:
The given list may contain duplicates, so ascending order means >= here.
1 <= k <= 3500
-105 <= value of elements <= 105.
For Java users, please note that the input type has been changed to List<List<Integer>>. And after you reset the code template, you'll see this point.
*/

/**
 * @param {number[][]} nums
 * @return {number[]}
 use MinHeap for this, heap keynote: parentIndex  = (childIndex + 1)/2 - 1, childIndex = (parentIndex+1)*2 siblingInd = childIndex-1;
 to get the max, we can use a maxHeap.
 */
function MinHeap() {
    this.data = [];
}

MinHeap.prototype.insert= function(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length-1);
};

MinHeap.prototype.bubbleUp = function(index) {
    while(index > 0) {
        var parent = Math.floor((index+1)/2) -1;
        if(this.data[parent].value > this.data[index].value) {
            var temp = this.data[parent];
            this.data[parent] = this.data[index];
            this.data[index] = temp;
        }
        index = parent;
    }
};

MinHeap.prototype.getMin = function() {
    var val = this.data[0];
    this.data[0] = this.data.pop(); //move last one to first position. The key!!!!
    this.bubbleDown(0);
    return val;
};

MinHeap.prototype.bubbleDown = function(parent) {
    while(true) {
        var child = (parent+1)*2;
        var sibling = child -1;
        var toSwap = null;
        if(this.data[child] && this.data[child].value < this.data[parent].value) {
            toSwap = child;
        }
        if(this.data[sibling] && this.data[sibling].value < this.data[parent].value &&
           (!this.data[child] || this.data[sibling].value < this.data[child].value) ) {
            toSwap = sibling;
        }
        if(toSwap === null)  break;
        var temp = this.data[toSwap];
        this.data[toSwap] = this.data[parent];
        this.data[parent] = temp;
        parent = toSwap;
    }
};

function MaxHeap() {
    this.data = [];
}

MaxHeap.prototype.insert= function(val) {
    this.data.push(val);
    this.bubbleUp(this.data.length-1);
};

MaxHeap.prototype.bubbleUp = function(index) {
    while(index > 0) {
        var parent = Math.floor((index+1)/2) -1;
        if(this.data[parent].value < this.data[index].value) {
            var temp = this.data[parent];
            this.data[parent] = this.data[index];
            this.data[index] = temp;
        }
        index = parent;
    }
};

MaxHeap.prototype.getMax = function() {
    var val = this.data[0];
    return val;
};

var smallestRange = function(nums) {
    var range, point = new Array(nums.length).fill(0);
    var minheap = new MinHeap();
    var maxheap = new MaxHeap();
    for(var i=0; i<nums.length; i++) {
        minheap.insert({value: nums[i][0], which: i});
        maxheap.insert({value: nums[i][0], which: i});
    }
    
    while(true) {
        var minV = minheap.getMin();
        var maxV = maxheap.getMax();
        if(!range || maxV.value - minV.value < range[1] - range[0]) {
            range = [minV.value, maxV.value];
        }
        var index = minV.which;
        point[index] ++;
        if(nums[index][point[index]] === undefined)  break;
        minheap.insert({value: nums[index][point[index]], which: index});
        maxheap.insert({value: nums[index][point[index]], which: index});
    }
    return range;
};
