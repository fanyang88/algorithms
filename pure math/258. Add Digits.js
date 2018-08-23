/*
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
For example:
Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

先来观察1到20的所有的树根：
1    1
2    2
3    3
4    4
5    5
6    6
7    7
8    8    
9    9    
10    1
11    2
12    3    
13    4
14    5
15    6
16    7
17    8
18    9
19    1
20    2
根据上面的列举，我们可以得出规律，每9个一循环，所有大于9的数的树根都是对9取余，那么小于等于9的数对9取余就是0
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if(num==0) return 0;
    if(num%9==0) return 9;
    return num%9;
};
