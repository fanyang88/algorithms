/*
There are a row of n houses, each house can be painted with one of the k colors. 
The cost of painting each house with a certain color is different. 
You have to paint all the houses such that no two adjacent houses have the same color.
The cost of painting each house with a certain color is represented by a n x k cost matrix. 
For example, costs[0][0] is the cost of painting house 0 with color 0; 
costs[1][2] is the cost of painting house 1 with color 2, and so on... 
Find the minimum cost to paint all houses.
Note:
All costs are positive integers.
Follow up:
Could you solve it in O(nk) runtime?
*/

/**
 * @param {number[][]} costs
 * @return {number}
 house/cost  0  1  2  3 
          0| 1  2  3  1
          1| 3  2  1  1
          2| 2  1  2  0
          
 house/cost  0              1               2               3 
          0| 1              2               3               1
          1| 3+min(2,3,1)=4 2+min(1,3,1)=3  1+min(1,2,1)=2  1+min(1,2,3)=2
          2| 2+min(3,2,2)=4 1+min(4,2,2)=3  2+min(4,3,2)=4  0+min(4,3,2)=2
 */
var minCostII = function(costs) {
    if(costs.length === 0)  return 0;
    var dp =[];
    for(var i=0; i<costs.length; i++) {
        dp[i] = [];
        for(var j=0; j<costs[0].length; j++) {
            dp[i][j] = costs[i][j];
        }
    }
    
    for(var i=1; i<costs.length; i++) {
        for(var j=0; j<costs[0].length; j++) {
            var temp = dp[i-1].slice(0);
            temp.splice(j, 1);
            dp[i][j] += Math.min(...temp);
        }
    }
    
    return Math.min(...dp[costs.length - 1]);
};
