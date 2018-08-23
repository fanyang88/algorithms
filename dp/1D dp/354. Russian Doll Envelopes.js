/*
You have a number of envelopes with widths and heights given as a pair of integers (w, h). 
One envelope can fit into another if and only if 
both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)
Example:
Given envelopes = [[5,4],[6,4],[6,7],[2,3]], 
the maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
*/

/**
 * @param {number[][]} envelopes
 * @return {number}
 refer 300
 */
var maxEnvelopes = function(envelopes) {
    envelopes.sort((a, b) => {
        if(a[0] === b[0])  return a[1] - b[1];
        return a[0] - b[0];
    });
    return lengthOfLongestIncreasingSubSequence(envelopes);
};

var lengthOfLongestIncreasingSubSequence = function(nums) {
    if(nums.length === 0)  return 0;
    var dp = [1];
    for(var i=1; i<nums.length; i++) {
        dp[i] = 1;
        for(var k=0; k<i; k++) {
            if(nums[k][1] < nums[i][1] && nums[k][0] < nums[i][0]) {
                dp[i] = Math.max(dp[i], dp[k]+1);
            } 
        }
    }
    return Math.max(...dp);
};