/*
Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, 
please find out a way you can make one square by using up all those matchsticks. You should not break any stick, 
but you can link them up, and each matchstick must be used exactly one time.
Your input will be several matchsticks the girl has, represented with their stick length. 
Your output will either be true or false, to represent whether you could make one square using all the matchsticks 
the little match girl has.
Example 1:  Input: [1,1,2,2,2]   Output: true
Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.
Example 2:   Input: [3,3,3,3,4]   Output: false
Explanation: You cannot find a way to form a square with all the matchsticks.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
                                      sum1sum2sum3sum4
                                        0,0,0,0
             /                   |                          |                      \
          a[0] 0 0 0          0 a[0] 0 0                 0 0 a[0] 0            0 0 0 a[0]
  /         |    |    \       /    |        |      \      
a[0]+a[1] a[0] a[0]  a[0]   a[1]   0        0      0    .....
0         a[1]  0     0     a[0]  a[1]+a[0] a[0]  a[0]
0          0   a[1]   0     0      0        a[1]   0
0          0    0    a[1]   0      0        0     a[1]
once we have sum1, sum2, sum3, sum4 === total sum /4, we find one, 
if there is any sum1-4 > total sum /4, stop search from this possiblity
 */
var makesquare = function(nums) {
    if(nums.length===0)  return false;
    nums.sort((a, b) => {
        return b-a;
    });
    var total = nums.reduce((total, item) => {
        return total + item;
    }, 0);
    if(total % 4 !==0)  return false;
    var sum = [0,0,0,0];
    return dfs(0, sum, nums, total/4);
};

var dfs = function(index, sum, nums, len) {
    for(var i=0; i<4; i++) {
        if(sum[i] > len)  return false;
    }
    if(index === nums.length)  return true;
      
    for(var i=0; i<4; i++) {
        sum[i] += nums[index];
        if(dfs(index+1, sum, nums, len))  return true;
        sum[i] -= nums[index];
        
    }
    return false;
};
