/*
Given two integers representing the numerator and denominator of a fraction, 
return the fraction in string format.
If the fractional part is repeating, enclose the repeating part in parentheses.

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 2, denominator = 3
Output: "0.(6)"
*/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator===0)  return '0';
    if(numerator=== -Math.pow(2, 31) && Math.abs(denominator) ===1)  
        return denominator===1 ? numerator.toString() : ''+Math.pow(2, 31);
    // above are special cases
    
    var res ='';
    if(numerator * denominator < 0)  res +='-';
    var n = Math.abs(numerator);
    var d = Math.abs(denominator);
    
   // Handle the integer part
    res += '' + (~~(n / d));
    if(n % d ===0)  return res;
    res+='.';
    
    // handle the decimal part
    var map = {}, r = n % d;
    while( r!==0) {
        // if the position has seen before, means there is a loop from last seen to current res.length
        if(map[r] >0) {
            var res = res.substring(0, map[r])+'(' + res.substring(map[r], res.length) + ')';
            break;
        }
        // record the position with the length;
        map[r] = res.length;
        // simulate the process
        r = r * 10;
        res+= ''+(~~(r / d));
        r = r % d;
    }
    return res;
};