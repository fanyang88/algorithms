/*
Given an index k, return the kth row of the Pascal's triangle.
For example, given k = 3,
Return [1,3,3,1].
Could you optimize your algorithm to use only O(k) extra space?
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    var res = [1];
     if(rowIndex === 0)  return res;
    var i=1;
    while(i<=rowIndex) {
        var prev= res.slice(0);
        for(var j=0; j<=i; j++) {
            res[j] =(prev[j-1] || 0) + (prev[j] || 0);
        }
        i++;
    }
    return res;
};
