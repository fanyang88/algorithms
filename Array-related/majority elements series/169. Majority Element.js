/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
You may assume that the array is non-empty and the majority element always exist in the array.

algorithm loops through each element and maintains a count of a[maj_index], If next element is same then increments the count, if next element is not same then decrements the count, and if the count reaches 0 then changes the maj_index to the current element and sets count to 1.
Example:
A[] = 2, 2, 3, 5, 2, 2, 6
Initialize:
maj_index = 0, count = 1 –> candidate ‘2?       2, 2, 3, 5, 2, 2, 6

Same as a[maj_index] => count = 2               2, 2, 3, 5, 2, 2, 6
Different from a[maj_index] => count = 1        2, 2, 3, 5, 2, 2, 6
Different from a[maj_index] => count = 0        2, 2, 3, 5, 2, 2, 6
Since count = 0, change candidate for majority element to 5 => maj_index = 3, count = 1
Different from a[maj_index] => count = 0        2, 2, 3, 5, 2, 2, 6
Since count = 0, change candidate for majority element to 2 => maj_index = 4
Same as a[maj_index] => count = 2               2, 2, 3, 5, 2, 2, 6
Different from a[maj_index] => count = 1
Finally candidate for majority element is 2.
*/

/**
 * @param {number[]} nums
 * @return {number}
 * 
 */

 
var majorityElement = function(nums) {
    var major = nums[0], count =1;
    for(i=1; i<nums.length; i++) {
        if(nums[i] == major) count++;
        else count--;
        if(count==0) {
            major = nums[i];
            count =1;
        }
    }
    return major;
};
