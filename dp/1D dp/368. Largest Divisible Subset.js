/*

same as Longest Inceasing sequence


Given a set of distinct positive integers, 
find the largest subset such that every pair (Si, Sj) of elements 
in this subset satisfies: Si % Sj = 0 or Sj % Si = 0.

If there are multiple solutions, return any subset is fine.

Example 1:

nums: [1,2,3]

Result: [1,2] (of course, [1,3] will also be ok)
Example 2:

nums: [1,2,4,8]

Result: [1,2,4,8]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 same as LIS:
 e.g:  [1,2,4,8,1]
       0   1   2   3   4
       
 dp :| 1 | 1 | 1 | 1 | 1 |
 --------------------------
pre :| 0 | 0 | 0 | 0 | 0 |

i=1, j=0  since A[i] % A[j] ===0 since dp[j]+1 > dp[i] dp[i] = dp[j]+1=2  pre = j=0
i=2, j=0  since A[2] % A[0] ===0 since dp[0]+1 > dp[2] dp[2] = dp[0]+1=2  pre = j=0
     j=1  since A[2] % A[1] ===0 since dp[1]+1 > dp[2] dp[2] = dp[1]+1=3  pre = j=1
     
finaly we have filled the array as such:
       0   1   2   3   4
       
 dp :| 1 | 2 | 3 | 4 | 1 |    
 --------------------------
pre :| 0 | 0 | 1 | 2 | 4 |

max from dp is 4 and index =3 pre[3]=2 pre[2]=1  pre[1]=0 so we can get the path
 */
var largestDivisibleSubset = function(nums) {
    if(nums.length===0) return [];
    nums.sort((a, b) => a-b);
    var n = nums.length, maxV = -Infinity, start=0, res= [], pre= [];
    var dp = new Array(n).fill(1);
    for(var i=0; i<n; i++) pre[i] = i;
    
    for(var i=1; i<n; i++) {
        for(var j=0; j<i; j++) {
            if(nums[i] % nums[j] !== 0)  continue;
            if(dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                pre[i] = j;
            }
        }
        if(dp[i] > maxV) {
            maxV = dp[i];
            start = i;
        }
    }
   res.unshift(nums[start]);
    while(start !== pre[start]) {
        res.unshift(nums[pre[start]]);
        start = pre[start];
    }
    return res;
};