/*
Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.
The update(i, val) function modifies nums by updating the element at index i to val.
Example:
Given nums = [1, 3, 5]
sumRange(0, 2) -> 9
update(1, 2)
sumRange(0, 2) -> 8
*/

/**
 * @param {number[]} nums
 we can use binary index tree which can make the update and getSum to be logN, which is faster then O(N), but to construct the tree is O(NlogN)
 To construct the binary index tree, we need to contruct a new array which start from 1.
 lowbit = (i&(-i),  if is 1, means it equals to itself, otherwise means how many pre items it sum up to), e.g: 1&-1 =1 2&-2=2
 index  lowbit    
 1 :01      1     e[1] = a[1]    
 2 :10      2     e[2] = a[1] + a[2] = e[1] + a[2]  
 3 :11      1     e[3] = a[3]   
 4 :100     4     e[4] = a[1] + a[2] + a[3] + a[4]  = e[2] + e[3] +a[4]
 5 :101     1     e[5] = a[5]
 6 :110     2     e[6] = a[5] + a[6] = e[5] + a[6]
 7 :111     1     e[7] = a[7]
 8 :1000    8     e[4] = a[1] + a[2] + a[3] + a[4] + a[5] + a[6] + a[7] + a[8] = e[4] + e[6] + e[7] + a[8]
 
 to update a value, say we update a[1]
 then we only need to update e[1], e[2], e[4], e[8] ...
 which is from i to tree.length and each time jump i&(-i), 1->2  2->4  4->8 
 to get a sum from i to j, we only need to use e[j+1] - e[i], to get e[j+1] we only need to get j+1 to 0, each time we jump i&(-i)
 for example, to get sum[9], 9->8  8->0
 */
var NumArray = function(nums) {
    this.nums = nums;
    this.indexTree = [0];
    for(var i=1; i<nums.length+1; i++) {
        var sum = 0;
        var lowbit = i&(-i);
        for(var j=i-lowbit; j<i; j++) {
            sum += nums[j];
        }
        this.indexTree[i] = sum;
    }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    var diff = val - this.nums[i];
    this.nums[i] = val;
    i++; // current i point to the corresponding index in tree
    for(; i < this.indexTree.length; i +=(i & -i)) {
        this.indexTree[i] += diff;
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.getSum(j+1) - this.getSum(i);
};

NumArray.prototype.getSum = function(k) {
    var sum = 0;
    for(var i=k; i>0; i-=(i & -i)) {
        sum += this.indexTree[i];
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
 
 
 // Another way to write it, utilize update function
 var NumArray = function(nums) {
    this.nums = nums;
    this.indexTree = new Array(nums.length +1).fill(0);
    for(var i=0; i<nums.length; i++) {
        this.add(i, nums[i]);
    }
};

NumArray.prototype.add = function(i, val) {
    i++; // current i point to the corresponding index in tree
    for(; i < this.indexTree.length; i +=(i & -i)) {
        this.indexTree[i] += val;
    }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    var diff = val - this.nums[i];
    this.nums[i] = val;
    i++; // current i point to the corresponding index in tree
    for(; i < this.indexTree.length; i +=(i & -i)) {
        this.indexTree[i] += diff;
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.getSum(j+1) - this.getSum(i);
};

NumArray.prototype.getSum = function(k) {
    var sum = 0;
    for(var i=k; i>0; i-=(i & -i)) {
        sum += this.indexTree[i];
    }
    return sum;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */
 
