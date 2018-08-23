/*
Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.
(Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)
Example 1:
Input: N = 10
Output: 9
Example 2:
Input: N = 1234
Output: 1234
Example 3:
Input: N = 332
Output: 299
*/

/**
 * @param {number} N
 * @return {number}
 for exmaple: 4321  
 - 1<2 change to 4311 mark = 3
 - 1<3 change to 4211 mark = 2
 - 2<4 change to 3211 mark = 1
 from mark 1 to end change char to '9' - 3999
 10
 0<1 change to 00 mark =1
 from mark 1 to end change char to '9' - 09 - 9
 
 
 */
var monotoneIncreasingDigits = function(N) {
    if(N <=9)  return N;
    var arr = (''+N).split('');
    var mark;
    for(var i=arr.length-1; i>0; i--) {
        if(arr[i] < arr[i-1]) {
            mark = i;
            arr[i-1] --;
        }
    }
    for(var i= mark; i< arr.length; i++) {
        arr[i] = '9';
    }
    return parseInt(arr.join(''));
};
