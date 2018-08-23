/*
Given an integer array with even length, where different numbers in this array represent different kinds of candies. Each number means one candy of the corresponding kind. You need to distribute these candies equally in number to brother and sister. Return the maximum number of kinds of candies the sister could gain.
Example 1:
Input: candies = [1,1,2,2,3,3]
Output: 3
Explanation:
There are three different kinds of candies (1, 2 and 3), and two candies for each kind.
Optimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. 
The sister has three different kinds of candies. 
Example 2:
Input: candies = [1,1,2,3]
Output: 2
Explanation: For example, the sister has candies [2,3] and the brother has candies [1,1]. 
The sister has two different kinds of candies, the brother has only one kind of candies. 

*/

/**
 * @param {number[]} candies
 * @return {number}
 
 there are 3 cases: 
 candle kind == candies.length/2 = result
 candle kind < candies.length/2 e.g: [1,1,1,2,2,1]  result=[1,2]=  candle kind
 candle kind > candies.length/2 result = candies.length/2;
 */
var distributeCandies = function(candies) {
    var set = new Set(candies);
    if(set.size >= candies.length/2)  return ~~(candies.length/2);
    return set.size;
};