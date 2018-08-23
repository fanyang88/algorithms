/*
Validate if a given string is numeric.
Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
*/

/**
 * @param {string} s
 * @return {boolean}
 number is represented as:
   (+/-)(float)(e)(+/-)(Int), check each part rigoriously
 */
var isNumber = function(s) {
    s = s.trim();
    var index = 0, digit=0, dot=0;
    if(s[0] === '+' || s[0] === '-') index ++;
    while((isNumber(s[index]) || s[index] === '.') && index < s.length) {
        if(isNumber(s[index])) digit++;
        if(s[index] === '.') dot++;
        index++;
    }
    if(digit <=0 || dot > 1) {
        return false;
    }
    //check e part
    if(s[index] === 'e') {
        index ++;
        if(s[index] === '+' || s[index] === '-'){
            index ++;
        }
        if(index === s.length) return false;
        while(isNumber(s[index])) {
            index++;
        }
    }
    return index === s.length;
};

var isNumber = function(c) {
    if(!isNaN(c) && c!==' ') {
        return true;
    }
    return false;
};
