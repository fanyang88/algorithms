/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.
Note:
The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

var addStrings = function(num1, num2) {
    var i, arr = [], carry = 0, sum,
        arr1 = num1.split('').reverse(),
        arr2 = num2.split('').reverse(),
        len = arr1.length > arr2.length ? arr1.length : arr2.length;
    
    for(i=0; i<len; i++) {
        sum = (parseInt(arr1[i]) | 0) + (parseInt(arr2[i]) | 0) + carry;
        if(sum >= 10) {
            sum = sum - 10;
            carry = 1;
        } else {
            carry = 0;
        }
        arr.push(sum);
    }
    if(carry) {
        arr.push(carry);
    }
    return arr.reverse().join('');
};
