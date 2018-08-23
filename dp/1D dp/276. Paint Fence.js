/*
There is a fence with n posts, 
each post can be painted with one of the k colors.
You have to paint all the posts such that no more than two adjacent fence 
posts have the same color.
Return the total number of ways you can paint the fence.

Example:
Input: n = 3, k = 2
Output: 6
Explanation: Take c1 as color 1, c2 as color 2. All possible ways are:
            post1  post2  post3      
 -----      -----  -----  -----       
   1         c1     c1     c2 
   2         c1     c2     c1 
   3         c1     c2     c2 
   4         c2     c1     c1  
   5         c2     c1     c2
   6         c2     c2     c1
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 if first same as second, same = k*1
 if first diff as second, diff = (k-1)*k
 if third same as second, same = (k-1)*k*1 = prevDiff, 
                  since first one must diff with second one
 if third diff as second, diff = prevSame*(k-1) + prevDiff*(k-1) 
                  since it can be two senerios:
                  first one is same as second one and is colored B, then third one can be anything except color B
                  first one is diff as second one and one is R, one is B, then third one can be anything except color B as well
 */
var numWays = function(n, k) {
    if(n===0)  return 0;
    if(n===1)  return k;
    
    var diff = k*(k-1);
    var same = k;
    for(var i=2; i<n; i++) {
        var prevSame = same;
        var prevDiff = diff;
        diff = (prevSame +  prevDiff)* (k-1);
        same = prevDiff;
    }
    return diff + same;
};
