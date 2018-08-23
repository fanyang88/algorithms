/*
A frog is crossing a river. The river is divided into x units and at each unit there may or may not exist a stone. 
The frog can jump on a stone, but it must not jump into the water.
Given a list of stones' positions (in units) in sorted ascending order, 
determine if the frog is able to cross the river by landing on the last stone. 
Initially, the frog is on the first stone and assume the first jump must be 1 unit.
If the frog's last jump was k units, then its next jump must be either k - 1, k, or k + 1 units. 
Note that the frog can only jump in the forward direction.
Note:
The number of stones is ≥ 2 and is < 1,100.
Each stone's position will be a non-negative integer < 231.
The first stone's position is always 0.
Example 1:   [0,1,3,5,6,8,12,17]
There are a total of 8 stones.
The first stone at the 0th unit, second stone at the 1st unit,
third stone at the 3rd unit, and so on...
The last stone at the 17th unit.
Return true. The frog can jump to the last stone by jumping 
1 unit to the 2nd stone, then 2 units to the 3rd stone, then 
2 units to the 4th stone, then 3 units to the 6th stone, 
4 units to the 7th stone, and 5 units to the 8th stone.

Example 2:[0,1,2,3,4,8,9,11]
Return false. There is no way to jump to the last stone as the gap between the 5th and 6th stone is too large.


/**
 * @param {number[]} stones
 * @return {boolean}
 
 use a hashmap, the key is the stone itself, the value is a set which stones can comes to this stone.
 since each stone can be reached by different last steps.
 initlize is map[0].add(0);
 Example 2:[0,1,2,3,4,8,9,11]
 i=0, map[0] = [0]   nextStep = -1 0 1  map[1] = [1]
 i=1  map[1] = [1]   nextStep = 0 1 2  map[1+1] = [1]  stone 1 can jump to stone 2
                                       map[2+1] = [1] stone 1 can jump to stone 3
 i=2  map[2] =[1]    nextStep = 0 1 2  map[2+1] = [2]  stone 2 can jump to stone 3
                                       map[2+2] = [2] stone 2 can jump to stone 4
 i=3 since map[3] = [1, 2]  nextStep = 0 1 2 3  
 ....
                     

 */
var canCross = function(stones) {
    if(stones.length === 0)  return false;
    var map = new Map();
    for(var i=0; i<stones.length; i++) {
        map.set(stones[i], new Set());
    }
    map.get(0).add(0);
    for(var i=0; i<stones.length; i++) {
        for(var lastStep of map.get(stones[i])) {  // check each last step
            // the next step range would be from lastStep - 1 to lastStep +1
            for(var nextStep = lastStep-1; nextStep <= lastStep+1; nextStep ++) {
                if(nextStep > 0 && map.has(nextStep + stones[i])) {  // add the new lastStep to stone: nextStep+stones[i]
                    map.get(nextStep + stones[i]).add(nextStep);
                }
            }
        }
    }
    return map.get(stones[stones.length-1]).size !== 0;
};
