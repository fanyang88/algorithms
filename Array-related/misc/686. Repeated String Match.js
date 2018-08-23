/*
Given two strings A and B, find the minimum number of times A has to be repeated such that B 
is a substring of it. If no such solution, return -1.
For example, with A = "abcd" and B = "cdabcdab".
Return 3, because by repeating A three times (“abcdabcdabcd”), 
B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").
*/

var repeatedStringMatch = function(A, B) {
    if(A === B) return 1;
    var orignal = A;
    var len = A.length, count =1;
    while(A.length <= B.length) {
        A += orignal;
        count++;
        if(A.indexOf(B) > -1) {
            return count;
        }
    }
    if(A.indexOf(B) > -1) {
        return 1;
    } else if ((A+orignal).indexOf(B) > -1) {
        return count+1;
    } else {
        return -1;
    }
};
