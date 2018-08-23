/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).
The replacement must be in-place, do not allocate extra memory.
Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * check if all nums[i] > nums[i+1]  if so, resort the array and return the result
   otherwise, find the i where nums[i] > nums[i+1], point  = i, find the min larger number then nums[i] in the array and swap it with the nums[point],
   687321  find 6 is the place where nums[i+1] > nums[i], mark it as point
   from right to left, find the first larger number then 6, which is 7
   swap 6 with 7, changed to 786321 
   then from point to end reverse 86321
   
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 
 e.g: 1234 531 => 1235 134
 4<5  once the nums[i] < nums[i+1]  swap nums[i] and nums[i+1], reverse  i+1 to the end
 */
var nextPermutation = function(nums) {
    var n= nums.length;
    for(var i=n-2; i>=0; i--) {
        if(nums[i] < nums[i+1])  break;
    }
    if(i<0) {  // reverse the whole array
        reverse(0, n-1, nums);
        return;
    } 
    var swap1 = i, swap2;
    for(var i=n-1; i>=0; i--) {
        if(nums[i] > nums[swap1]) {
            swap2 = i;    
            break;
        }
    }
    swap(swap1, swap2, nums);
    reverse(swap1+1, n-1, nums);
    return;
};

var reverse = function(s, e, nums) {
    while(s<e) {
        swap(s, e, nums);
        s++;
        e--;
    }
};

var swap = function(i, j, nums) {
    var temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
};
