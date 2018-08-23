/**
 * 
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
 *For example, given array S = [-1, 0, 1, 2, -1, -4],
A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

@param {number[]} nums
 * @return {number[][]}
 * 
 * 
sort(S);
 for i=0 to n-3 do
    a = S[i];
    k = i+1;
    l = n-1;
    while (k<l) do
       b = S[k];
       c = S[l];
       if (a+b+c == 0) then
          output a, b, c;
          // Continue search for all triplet combinations summing to zero.
           k = k + 1
           l = l - 1
       else if (a+b+c > 0) then
          l = l - 1;
       else
          k = k + 1;
       end   
    end
 end
*/
 
var threeSum = function(nums) {
    var n = nums.length, res= [];
    // find two number a, b can sum up to the -c
    nums.sort((a, b) => a-b);
    for(var i=0; i<n-2; i++) {
        var c = nums[i], l=i+1, r= n-1;
        while(l< r) {
            if(c+nums[l] + nums[r] ===0) {
                res.push([c, nums[l], nums[r]]);
                l++;
                r--;
                while(nums[l] === nums[l-1] && l<r) l++;
                while(nums[r] === nums[r+1] && r>l) r--;
            } else if(c+nums[l] + nums[r] < 0) {
                l++;
            } else {
                r--;
            }
        }
        while(nums[i+1] === nums[i] && i<n-2) i++;
    }
    return res;
};
