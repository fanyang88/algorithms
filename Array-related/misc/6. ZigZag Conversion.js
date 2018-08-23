/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1)  return s;
    var row = numRows, col = s.length, matrix = new Array(row), res= '', index=0, x=0, y=0;
    for(var i=0; i< row; i++) {
        matrix[i] = new Array(col).fill('');
    }
    while(index < s.length) {
        if(x === 0) {
            while(x < row && index < s.length) {
                matrix[x++][y] = s[index++];
            }
        } else {
            x-=2; // x point to last second row
            y++;
            while(x > 0 && index < s.length) {
                matrix[x--][y++] = s[index++];
            }
        }
    }

    for(var i=0; i<row; i++) {
        for(var j=0; j<col; j++) {
            res += matrix[i][j];
        }
    }
    return res;
};
