/*
We are given an array asteroids of integers representing asteroids in a row.

For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

Example 1:
Input: 
asteroids = [5, 10, -5]
Output: [5, 10]
Explanation: 
The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.
Example 2:
Input: 
asteroids = [8, -8]
Output: []
Explanation: 
The 8 and -8 collide exploding each other.
Example 3:
Input: 
asteroids = [10, 2, -5]
Output: [10]
Explanation: 
The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.
Example 4:
Input: 
asteroids = [-2, -1, 1, 2]
Output: [-2, -1, 1, 2]
Explanation: 
The -2 and -1 are moving left, while the 1 and 2 are moving right.
Asteroids moving the same direction never meet, so no asteroids will meet each other.
*/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 [10, 2, -5]
 use stack, only when the stack.top is positive and incoming value is negtive, we need to check
 if the abs of incoming value = stack.value, pop stack value, move to next incoming value
 if the abs of incoming value < stack.value, move to next incoming value
 if the abs of incoming value > stack.value, pop stack value, check again 
 */
var asteroidCollision = function(asteroids) {
    var st = [asteroids[0]];
    for(var i=1; i<asteroids.length; i++) {
        var top = getTop(st);
        if(top > 0 && asteroids[i] < 0) {
            if(top === Math.abs(asteroids[i])) {
                st.pop();
            } else if(top > Math.abs(asteroids[i])) {
                // do nothing
            } else {
                while(getTop(st)>0 && getTop(st) < Math.abs(asteroids[i])) st.pop();
                i--;
            }
        } else {
            st.push(asteroids[i]);
        }
        
    }
    return st;
};

var getTop = function(st) {
    return st.length > 0 ? st[st.length-1] : null;
}
