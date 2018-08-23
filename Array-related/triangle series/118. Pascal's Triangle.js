//Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
/*

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    var arr = [1], res = [];
    for(var i=0; i<numRows; i++) {
        res.push(arr.slice(0));
        
        var newArr= [arr[0]];
        for(var j=1; j<arr.length; j++) {
            var val = arr[j-1] + arr[j];
            newArr.push(val);
        }
        newArr.push(arr[arr.length-1]);

        arr = newArr;
    }
    return res;
};
