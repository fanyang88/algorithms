/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 e.g:           0       1       2   - index
         /////////////////////////
                1       2       3
                        4       5
         --------------------------------
                        1       5  (3*5)
                1       0          (2*5)
                5                  (1*5)
         ------------------------------
                1       2
                8
        4
  ----------------------------------
        5       5       3       5    sum is 5535
 */
var multiply = function(num1, num2) {
    var m = num1.length, n = num2.length, res = new Array(m+n).fill(0), carry = 0;
    for(var i=m-1; i>=0; i--) {
        for(var j=n-1; j>=0; j--) {
            res[i+j+1] += (parseInt(num1[i]) * parseInt(num2[j])) % 10;
            res[i+j] += ~~(parseInt(num1[i]) * parseInt(num2[j]) / 10);
        }
    }
    
   for(var i=m+n-1; i>=0; i--) {
       res[i] += carry;
       if(res[i] >= 10) {
           carry = ~~(res[i] / 10);
           res[i] = res[i] % 10;
       } else {
           carry = 0;
       } 
   }
    while(res[0] === 0) {
        res.shift();
    }
    return res.length===0 ? '0' : res.join('');
};

