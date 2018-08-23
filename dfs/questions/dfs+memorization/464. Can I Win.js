/*
In the "100 game," two players take turns adding, 
to a running total, any integer from 1..10. 
The player who first causes the running total to reach or exceed 100 wins.

What if we change the game so that players cannot re-use integers?

For example, two players might take turns drawing from a common pool of numbers 
of 1..15 without replacement until they reach a total >= 100.

Given an integer maxChoosableInteger and another integer desiredTotal, 
determine if the first player to move can force a win, 
assuming both players play optimally.

You can always assume that maxChoosableInteger will not be larger than 20 
and desiredTotal will not be larger than 300.

Example

Input:
maxChoosableInteger = 10
desiredTotal = 11

Output:
false

Explanation:
No matter which integer the first player choose, the first player will lose.
The first player can choose an integer from 1 up to 10.
If the first player choose 1, 
the second player can only choose integers from 2 up to 10.
The second player will win by choosing 10 and get a total = 11, 
which is >= desiredTotal.
Same with other integers chosen by the first player, 
the second player will always win.
*/

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 
 using min -max algorithm, we already assume p1 would choose the best solution, so as p2, in order p1 to win, p2 have to fail in all braches, otherwise, p2 would choose the branch it can win, then p1 fail
 e.g: maxChoosableInteger = 3, desiredTotal = 4
 
            p1(1): U(1)                p1(2): U(2)                         p1(3): U(3)
          /             \             /          \                     /               \
 p2(3): U(1,3)W     p2(2): U(1,2) p2(1): U(1,2)   p2(3): U(2,3)W    p2(1): U(1,3)W   p2(2,3): U(2,3)W 
                        |            |
                p1(3): U(1,2,3)W  p1(3): U(1,2,3)W
p2 would always choose the best, so p1 can never win under above situation
win: 1  lose: -1     unknown:  0 
we can use a int to denote which int has visited and use a map to record it leads a win or lose
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    var sum = (1 + maxChoosableInteger)*maxChoosableInteger/2;
    if(sum < desiredTotal)  return false; // can never reach to
    if(desiredTotal <= 0)  return true;
    var map = {};
    return dfs(maxChoosableInteger, desiredTotal, 0, map);
};

var dfs = function(M, T, state, map) {
    if(T<=0)  return false; //already reach to end which is from player2 last play
    if(map[state] !== undefined)  return map[state] === 1;
    for(var i=1; i<=M; i++) {
        if(state & (1<<i))  continue; // i visited
        // player 2 result
        if(!dfs(M, T-i, state | (1 << i), map))  {
            map[state] = 1;
            return true;
        }
    }
    map[state] = -1;
    return false;
};
