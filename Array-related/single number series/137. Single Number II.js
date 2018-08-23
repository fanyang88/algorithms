/*
Given a non-empty array of integers, 
every element appears three times except for one, which appears exactly once. 
Find that single one.

Note:
Your algorithm should have a linear runtime complexity. 
Could you implement it without using extra memory?

Example 1:
Input: [2,2,3,2]
Output: 3

Example 2:
Input: [0,1,0,1,0,1,99]
Output: 99
*/

/**
 * @param {number[]} nums
 * @return {number}
 
 (sum % k) / (T % k)
 template:
 Given a non-empty array of integers, every element appears K times except for one, which appears exactly T times. Find that one.
 
 get sum of every bit first: 
 e.g: [1,2,3,1,2,3,1,3]  K=3 T=2
       0 1 1 0 1 1 0 1  = 5 % k = 2  => 2 / (T%k) is 2 = 1
       1 0 1 1 0 1 1 1  = 6 % k = 0  => 0 / (T%k) is 2 = 0
 answer is 2
 e.g: [1,2,3,1,2,3,1,3,2,2,2]  K=3 T=5
       0 1 1 0 1 1 0 1 1 1 1  = 8 % k = 2  => 2 / (T%k) is 2 = 1
       1 0 1 1 0 1 1 1 0 0 0  = 6 % k = 0  => 0 / (T%k) is 2 = 0
 answer is 2
 
 the each bit of the answer is: (sum of that bit % k) / (T % k)
 */
var singleNumber = function(nums) {
    var k = 3, t=1, res= 0;
    var bitSum = new Array(32).fill(0);
    for(var i=0; i<32; i++) {
        for(var num of nums) {
            bitSum[i] +=  getBit(num, i); // get ith bit from num
        }
        bitSum[i] = (bitSum[i]% k) / (t % k);
    }
    //console.log(bitSum[i]);
    for(var i=0; i<32; i++)  //use a 32 bit vector to create an integer, basic bit operation
        res+=bitSum[i]<<i;
   
    return res;
};

var getBit = function(num, k) {
    var n = num;
    n = n>>k;
    return n &1;
};