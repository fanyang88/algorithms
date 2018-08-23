/*
Winter is coming! Your first job during the contest is to design a standard heater with
 fixed warm radius to warm all the houses.
Now, you are given positions of houses and heaters on a horizontal line, 
find out minimum radius of heaters so that all houses could be covered by those heaters.
So, your input will be the positions of houses and heaters seperately, 
and your expected output will be the minimum radius standard of heaters.

Note:
Numbers of houses and heaters you are given are non-negative and will not exceed 25000.
Positions of houses and heaters you are given are non-negative and will not exceed 10^9.
As long as a house is in the heaters' warm radius range, it can be warmed.
All the heaters follow your radius standard and the warm radius will the same.
Example 1:
Input: [1,2,3],[2]
Output: 1
Explanation: The only heater was placed in the position 2, 
and if we use the radius 1 standard, then all the houses can be warmed.
Example 2:
Input: [1,2,3,4],[1,4]
Output: 1
Explanation: The two heater was placed in the position 1 and 4. 
We need to use radius 1 standard, then all the houses can be warmed.
*/

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 
 For each house, find its position between those heaters (thus we need the heaters array to be sorted).
Calculate the distances between this house and left heater and right heater, get a MIN value of those two values. Corner cases are there is no left or right heater.
Get MAX value among distances in step 2. It's the answer.
 */
var findRadius = function(houses, heaters) {
    var res = -1, left, right;
    // sort heaters first
    heaters = heaters.sort((a, b) => {
        return a- b;
    });
    
    for(var house of houses) {
        // binary search for right first
        var index = binarySearch(heaters, house);
        // heater is on the right of the house
        if(index >=0 && heaters[index] >= house) {  
            left = index - 1 >= 0 ? house - heaters[index - 1] : Number.MAX_VALUE;
            right = index < heaters.length ? heaters[index] - house : Number.MAX_VALUE;
        } else {  // heater is not exist or heater is on the left
            left = index  >= 0 ? house - heaters[index] : Number.MAX_VALUE;
            right = index +1 < heaters.length ? heaters[index+1] - house : Number.MAX_VALUE;
        }
        res = Math.max(res, Math.min(left, right));
    }
    return res;
    
};

var binarySearch = function(arr, val) {
    var s = 0, e = arr.length-1;
    while(s < e) {
        var mid = ~~((s+e) / 2);
        if(arr[mid] < val) {
            s = mid+1;
        } else {
            e = mid;
        }
    }
    return e;
};