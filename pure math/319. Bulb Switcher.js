/*
There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the ith round, you toggle every i bulb. For the nth round, you only toggle the last bulb. Find how many bulbs are on after n rounds.
Example:
Given n = 3. 
At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off]. 
So you should return 1, because there is only one bulb is on.
*/

/**
 * @param {number} n
 * @return {number}
 return the sqrt root of n which indicate how many sqrt factors it has
 light bulb    on number
 1                 1
 2                 1
 3                 1
 4                 2    1001  

  get the factor(except 1) number k of each number
 if k==even would be on
 if k=odd would be off
 1: 1 has only one factor 1 which doesn't count-> k=0  -on
 2: k=1
 3: k=1
 4: k=2   - on
 5: k=1
 6: k=3  
 7: k=1
 8: k=3
 9: k=2   -on
 ...              
 */
var bulbSwitch = function(n) {
    return parseInt(Math.sqrt(n));
};
