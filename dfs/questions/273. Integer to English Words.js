/*
Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.
For example,
123 -> "One Hundred Twenty Three"
12345 -> "Twelve Thousand Three Hundred Forty Five"
1234567 -> "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
*/

/**
 * @param {number} num
 * @return {string}
 
for example: 12345678
since num = 12345678, num % 1000 = 678 -> in range of <1000 go to helper function to intepreter it, num = num / 1000 
since num = 12345, num % 1000 = 345 -> go to helper function to intepreter it and add 'Thousands' afterward, num = num / 1000
since num = 12, num < 1000  go to go to helper function to intepreter it add 'million' afterward, num = num / 1000 = 0, stop
 */
var numberToWords = function(num) {
    var res = '', i=0;
    var LESS_THAN_20 = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    var THOUSANDS = ["", " Thousand ", " Million ", " Billion "];

    if(num === 0)  return 'Zero';
    while(num > 0) {
        if(num % 1000 >= 0) {
            res = helper(num % 1000, LESS_THAN_20, TENS) + (num % 1000 === 0 ? '' : THOUSANDS[i]) + res;
            num = Math.floor(num / 1000);
            i++;
        }
    }
    return res.trim();
};

var helper = function(num, LESS_THAN_20, TENS) {
    if(num===0)  return '';
    if(num <20)  return LESS_THAN_20[num];
    if(num < 100) return TENS[Math.floor(num / 10)] + (num % 10===0 ? '' : ' '+ helper(num % 10, LESS_THAN_20, TENS));
    else return LESS_THAN_20[Math.floor(num / 100)]  + 
        ' Hundred' + ( num % 100 === 0 ? '' : ' '+ helper(num % 100, LESS_THAN_20, TENS));
};
