/*
Your task is to design the basic function of Excel and implement the function of sum formula. Specifically, you need to implement the following functions:

Excel(int H, char W): This is the constructor. The inputs represents the height and width of the Excel form. H is a positive integer, range from 1 to 26. It represents the height. W is a character range from 'A' to 'Z'. It represents that the width is the number of characters from 'A' to W. The Excel form content is represented by a height * width 2D integer array C, it should be initialized to zero. You should assume that the first row of C starts from 1, and the first column of C starts from 'A'.


void Set(int row, char column, int val): Change the value at C(row, column) to be val.


int Get(int row, char column): Return the value at C(row, column).


int Sum(int row, char column, List of Strings : numbers): This function calculate and set the value at C(row, column), where the value should be the sum of cells represented by numbers. This function return the sum result at C(row, column). This sum formula should exist until this cell is overlapped by another value or another sum formula.

numbers is a list of strings that each string represent a cell or a range of cells. If the string represent a single cell, then it has the following format : ColRow. For example, "F7" represents the cell at (7, F).

If the string represent a range of cells, then it has the following format : ColRow1:ColRow2. The range will always be a rectangle, and ColRow1 represent the position of the top-left cell, and ColRow2 represents the position of the bottom-right cell.


Example 1:
Excel(3,"C"); 
// construct a 3*3 2D array with all zero.
//   A B C
// 1 0 0 0
// 2 0 0 0
// 3 0 0 0

Set(1, "A", 2);
// set C(1,"A") to be 2.
//   A B C
// 1 2 0 0
// 2 0 0 0
// 3 0 0 0

Sum(3, "C", ["A1", "A1:B2"]);
// set C(3,"C") to be the sum of value at C(1,"A") and the values sum of the rectangle range whose top-left cell is C(1,"A") and bottom-right cell is C(2,"B"). Return 4. 
//   A B C
// 1 2 0 0
// 2 0 0 0
// 3 0 0 4

Set(2, "B", 2);
// set C(2,"B") to be 2. Note C(3, "C") should also be changed.
//   A B C
// 1 2 0 0
// 2 0 2 0
// 3 0 0 6
Note:
You could assume that there won't be any circular sum reference. For example, A1 = sum(B1) and B1 = sum(A1).
The test cases are using double-quotes to represent a character.
Please remember to RESET your class variables declared in class Excel, as static/class variables are persisted across multiple test cases. Please see here for more details.

*/

/**
 * @param {number} H
 * @param {character} W
 */
var Excel = function(H, W) {
    this.W = W.charCodeAt(0) - 'A'.charCodeAt(0)+1;
    this.H = H;
    this.map = {}; // key is the postion, value is the fomulas associated
    this.mat = [];//new Array(H);
    for(var i=0; i<this.H; i++) {
        this.mat[i] = new Array(this.W).fill(0);
    }
    return;
};

/** 
 * @param {number} r 
 * @param {character} c 
 * @param {number} v
 * @return {void}
 */
Excel.prototype.set = function(r, c, v) {
    var row = r-1;
    var col = c.charCodeAt(0) - 'A'.charCodeAt(0);
    if(this.map[r+':'+c])  delete this.map[r+':'+c];
    this.mat[row][col] = v;
};
/** 
 * @param {number} r 
 * @param {character} c
 * @return {number}
 */
Excel.prototype.get = function(r, c) {
    var row = r-1;
    var col = c.charCodeAt(0) - 'A'.charCodeAt(0);
  //console.log('debug', row, col);
    if(this.map[r+':'+c]!== undefined)  
      return this.sum(r, c, this.map[r+':'+c]);
    return this.mat[row][col];
};

/** 
 * @param {number} r 
 * @param {character} c 
 * @param {string[]} strs
 * @return {number}
 */
Excel.prototype.sum = function(r, c, strs) {
    var sum=0;
    for(var str of strs) {
        if(str.indexOf(':') < 0) {
            //console.log('debug2', str, str.substring(1), str[0]);
            sum+= this.get(+str.substring(1), str[0]);
        } else {
            // A1:B2
            var [r1, c1, r2, c2] = this.getRange(str.split(':'));
            for(var i = r1; i<= r2; i++) {
                for(var j = c1; j<= c2; j++) {
                    sum += this.get(i+1, String.fromCharCode(j+'A'.charCodeAt(0)));
                }
            }
            
        }
    }
    this.map[r+':'+c] = strs;
    return sum;
};

Excel.prototype.getRange = function(arr) {
    // A1, B2
    var p1 = arr[0], p2 = arr[1];
    var c1 = p1[0].charCodeAt(0) - 'A'.charCodeAt(0);
    var r1 = +p1.substring(1)-1;
    
    var c2 = p2[0].charCodeAt(0) - 'A'.charCodeAt(0);
    var r2 = +p2.substring(1)-1;
    return [r1, c1, r2, c2];
};

/** 
 * Your Excel object will be instantiated and called as such:
 * var obj = Object.create(Excel).createNew(H, W)
 * obj.set(r,c,v)
 * var param_2 = obj.get(r,c)
 * var param_3 = obj.sum(r,c,strs)
 */