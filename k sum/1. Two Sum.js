/*

Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution.
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

e.g: [11, 7, 2, 15] -> 9
     since map[9-11] = map[-2] not exist, map[11] = 0
     since map[9-7] = map[2] not exist, map[7]= 1
     since map[9-2] = map[7] already exist, return map[target - 2], and 2
*/
var twoSum = function(nums, target) {
   var map = []; 
   for(var i=0; i<nums.length; i++) {
       // If map[target - nums[i]] not exist in map, add to map
       if(map[target - nums[i]] == null) {
           map[nums[i]] = i;
       }
       else {
           return [map[target-nums[i]], i];
       }
   }
};
