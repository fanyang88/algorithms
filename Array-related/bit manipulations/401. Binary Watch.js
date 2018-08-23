/*
A binary watch has 4 LEDs on the top which represent the hours (0-11), 
and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit 
on the right.

For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs 
that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", 
"0:16", "0:32"]
*/

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var res = [];
    for(var h=0; h<12; h++) {
        for(var m=0; m<60; m++) {
            if(countBit1(h) + countBit1(m) === num) {
                res.push(h+':'+ (m<10? 0+''+m : ''+m));
            }
        } 
    }
    return res;
};

var countBit1 = function(num) {
    var count = 0;
    while(num > 0) {
        if(num & 1)  count++;
        num = num >> 1;
    }
    return count;
};

