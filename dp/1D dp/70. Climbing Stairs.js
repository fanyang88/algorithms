/*
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //Finbonnsci
    let res=[1, 1];
    for(i=2; i<n+1; i++) {
        res.push(res[i-1] + res[i-2]) ;
    }
    return res[n];
};
