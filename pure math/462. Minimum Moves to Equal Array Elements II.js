/*
Given a non-empty integer array, find the minimum number of moves required to make all array elements equal, 
where a move is incrementing a selected element by 1 or decrementing a selected element by 1.
You may assume the array's length is at most 10,000.
Example:  Input:  [1,2,3]  Output:  2
Explanation: Only two moves are needed (remember each move increments or decrements one element):
[1,2,3]  =>  [2,2,3]  =>  [2,2,2]
*/

/**
 * @param {number[]} nums
 * @return {number}
 * sort the numbers, get the medium number and add/subtract each to equal to the medium number
 * e.g: 2 3 5 6 -> 3 3 3 3 count = 6  -> 5 5 5 5 -> count = 6
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => {
        return a-b;
    });
    const index= ((nums.length + 1)/2) -1;
    let middle =  nums[index.toFixed(0)], count= 0;
    nums.forEach(function(num) {
        count += Math.abs(num - middle);
    });
    return count;
};
