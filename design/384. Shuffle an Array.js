/*
Shuffle a set of numbers without duplicates.
Example:

// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);

// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();

// Resets the array back to its original configuration [1,2,3].
solution.reset();

// Returns the random shuffling of array [1,2,3].
solution.shuffle();
*/

/**
 * @param {number[]} nums
 */
// Math.floor(Math.random() * 4)  return random number from 0-3 
//from right to left, first randomly pick a number from index 0 - n-1  swap it with num[n-1]
// randomly pick a number from index 0 - n-2  swap it with num[n-2]
// ... till i=0

/*
0, 1
 first swap: 0 still at 0: P=1
 second swap: 1 at 1's P = 1/2  1 at 0's P = 1/2, same as 0
 now we need to aprove the Percent of A[i] at j at kth round = 1/k  i=[1,k]  j=[1,k]
 first assume A[i] get pick to place on kth postion. then  P = 1/k
 if A[i] didn't picked to place on kth position, the P = (k-1)/k * percent that A[i] at j, j not K
 we had the assumption the at k-1th round each element A[i] at j is (1/k-1)
 so P = (k-1)/k * 1/(k-1)
*/

var Solution = function(nums) {
    this.nums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.nums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    var _array = this.nums.concat();
    for (var i = _array.length-1; i>0; i--) {
        var j = Math.floor(Math.random() * (i + 1));  // rand is between 0 to i
        var temp = _array[i];
        _array[i] = _array[j];
        _array[j] = temp;
    }
    return _array;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */