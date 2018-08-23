/**
 * @param {number[]} boxes
 * @return {number}
 
 we can defined dp[l][r][k] to be the max point when string l .... r followed by number of K same element y while str[r] = y
 under this constrain, the upper bound of dp[l][r][k] = dp[l][r-1][0] + (k+1)*(k+1)
 for example: [3, 2, 1, 2, 2, 1, 1, 3, 4, 3, 1, 1, 1, 1] 
              l                              r<=      r                                
since str[r] = str[r-1] r--; k++; k=3; dp[i][j][k] = dp[l][r-1][0] + (k+1)*(k+1)
but it could have other options, such as:
since str[2] = str[r]  
[3, 2, 1] [2, 2, 1, 1, 3, 4, 3, 1, 1, 1, 1]  = dp[l][i][k+1] + (dp[i+1][r-1][0]  => refer to [2, 2, 1, 1, 3, 4, 3])
meaning we can remove the inside part [2, 2, 1, 1, 3, 4, 3] first, then we get [3, 2, 1] [1, 1, 1, 1]
since str[5] = str[r] 
[3, 2, 1, 2, 2, 1] [1, 3, 4, 3, 1, 1, 1, 1]  = dp[l][i][k+1] + (dp[i+1][r-1][0]  => refer to [1, 3, 4, 3])
meaning we can remove the inside part [1, 3, 4, 3] first, then we get [3, 2, 1, 2, 2, 1] [1, 1, 1, 1]
....
 */
var removeBoxes = function(boxes) {
    var dp = [];
    for(var i=0; i<boxes.length; i++) {
        dp[i] = [];
        for(var j=0; j<boxes.length; j++){
            dp[i][j] = [];
            for(var k=0; k<boxes.length; k++) {
                dp[i][j][k] = 0;
            }
        }
    }
    return dfs(boxes, 0, boxes.length-1, 0, dp);
};

var dfs = function(boxes, l, r, k, dp) {
    if(l>r)  return 0;
    if(dp[l][r][k]>  0)  return dp[l][r][k];
    
    while(r-1 >=0 && boxes[r] === boxes[r-1]) {
        r--;
        k++;
    } // r point to the last one equal to s[r]
    dp[l][r][k] = dfs(boxes, l, r-1, 0, dp) + (k+1) * (k+1);
    for(var i=l; i<r; i++) {
        if(boxes[i] === boxes[r]) { 
            // i point to the the last one equal to s[r] from l to i, including s[r], there is still k+1 same elements.
            dp[l][r][k] = Math.max(dp[l][r][k], dfs(boxes, l, i, k+1, dp) + dfs(boxes, i+1, r-1, 0, dp));
        }
    }
    return dp[l][r][k];
};
