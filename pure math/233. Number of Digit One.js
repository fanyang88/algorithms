/*
Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

Example:

Input: 13
Output: 6 
Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.
*/

/**
 * @param {number} n
 * @return {number}
 前10个数 0-9      个位上1总数是 1
 前100个数 0-99    十位上1总数是 10    10-19
 前1000个数 0-999  百位上1总数是 100   100-109  110-119 ----  190-199  
 e.g：
 如果百位上=0， n=3141092  百位上1的总数=3141*100
 如果百位上=1， n=3141192  百位上1的总数=3141*100 +（92+1）   100-192 has 93个1在百位上
 如果百位上>=2，n=3141592  百位上1的总数=3141*100 + 100       include 100-109  110-119 ----  190-199
 
 if n = xyzdabc
and we are considering the occurrence of one on thousand, it should be:

(1) xyz * 1000                     if d == 0
(2) xyz * 1000 + abc + 1           if d == 1
(3) xyz * 1000 + 1000              if d > 1

 check each digit from n and caculate the total number of 1s in that digit position.
 the sum is the answer
 */
var countDigitOne = function(n) {
    var num = n, divider = 10, count = 1, sum=0;
    while(divider / 10 <= num) {
        var firstPart = ~~(num / divider);
        var secondPart = num % divider;
        var firstDinSecondPart = ~~(secondPart / count);
        var restInsecondPart = secondPart % count;
        
        if(firstDinSecondPart === 0) {
            sum += firstPart * count;
        } else if(firstDinSecondPart === 1) {
            sum += firstPart * count + (restInsecondPart+1);
        } else {
            sum += (firstPart +1) * count;
        }
        divider = divider * 10;
        count = count * 10;
    }
    return sum;
};