/*
A self-dividing number is a number that is divisible by every digit it contains.
For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
Also, a self-dividing number is not allowed to contain the digit zero.
Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
Example 1:
Input: 
left = 1, right = 22
Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
*/

var selfDividingNumbers = function(left, right) {
    let res = [], flag;
    for(var num = left; num <= right; num++) {
        var arr = num.toString().split('');
        if(arr.indexOf('0') < 0) {
            flag = arr.every(item => num % (+item) === 0);
            if(flag) res.push(num);
        }
    }
    return res;
};
