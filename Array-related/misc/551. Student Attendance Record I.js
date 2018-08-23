/*
You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).
You need to return whether the student could be rewarded according to his attendance record.
Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
*/

var checkRecord = function(s) {
    let count1 =0, count2 = 0, maxLen = 0;

    s.split('').forEach(item => {
        if(item === 'A') {
            count1 ++;
            count2 = 0;
        } 
        if(item === 'L') {
            count2 ++;
            if(count2 > maxLen) {
                maxLen = count2;
            }
        } else {
            count2 = 0;
        }
    });
    
    return (count1 > 1 || maxLen > 2) ? false : true;
};
