/*
On a table are N cards, with a positive integer printed on the front and back of each card (possibly different).
We flip any number of cards, and after we choose one card. 
If the number X on the back of the chosen card is not on the front of any card, then this number X is good.
What is the smallest number that is good?  If no number is good, output 0.
Here, fronts[i] and backs[i] represent the number on the front and back of card i. 
A flip swaps the front and back numbers, so the value on the front is now on the back and vice versa.

Example:
Input: fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
Output: 2
Explanation: If we flip the second card, the fronts are [1,3,4,4,7] and the backs are [1,2,4,1,3].
We choose the second card, which has number 2 on the back, and it isn't on the front of any card, so 2 is good.
 
Note:
1 <= fronts.length == backs.length <= 1000.
1 <= fronts[i] <= 2000.
1 <= backs[i] <= 2000.
*/

/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 since we can only flip cards that front and back are not equal, we should exclude the numbers that have front and back are the same first
 then we check each card, and if the back[i] and front[i] not in the set, we try to find the smallest
 */
var flipgame = function(fronts, backs) {
    var set = new Set(), res = Infinity;
    for(var i=0; i<fronts.length; i++) {
        if(fronts[i] === backs[i]) 
            set.add(fronts[i]);
    }
    for(var i=0; i<fronts.length; i++) {
        if(!set.has(fronts[i]) && res > fronts[i])  res = fronts[i];
        if(!set.has(backs[i]) && res > backs[i])  res = backs[i];
    }
    return res === Infinity ? 0 : res;
};
