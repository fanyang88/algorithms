/*
Given a string of numbers and operators, 
return all possible results from computing all the different possible ways to group numbers and operators. 
The valid operators are +, - and *.

Example 1:

Input: "2-1-1"
Output: [0, 2]
Explanation: 
((2-1)-1) = 0 
(2-(1-1)) = 2
Example 2:

Input: "2*3-4*5"
Output: [-34, -14, -10, -10, 10]
Explanation: 
(2*(3-(4*5))) = -34 
((2*3)-(4*5)) = -14 
((2*(3-4))*5) = -10 
(2*((3-4)*5)) = -10 
(((2*3)-4)*5) = 10
*/

/**
 * @param {string} input
 * @return {number[]}
 check pic
 
     [34,-10]                 2*3-4*5
                    /*         |-          \*
      [2]        p1: 2         p1:2*3        p1: 2*3-4
    [17,-5]   p2: 3-4*5     p2:4*5        p2: 5
                  /      \
                 /         \
        [3]     /-[20]       \*
        p21:3 p22:4*5    p21:3-4[-1]   p22:5[5]
        |      /   \      /    \      
        3     4     5    3      4
        list 
    is empty
    return [3]
 
 
 */
var diffWaysToCompute = function(input) {
    if(isNumber(input))  return [+input];
    var res = [];
    for(var i=0; i<input.length; i++) {
        var c = input[i];
        if(c === '-' || c === '+' || c === '*') {  // split into p1 and p2
            var part1 = diffWaysToCompute(input.substring(0, i));
            var part2 = diffWaysToCompute(input.substring(i+1));
            // each part could have more than one result, e.g 3-4*5=[17, -5]
            for(var x of part1) {  
                for(var y of part2) {
                    if(c === '-')  res.push(x-y);
                    else if(c === '+')  res.push(x+y);
                    else  res.push(x*y);
                }
            }
        }
    }
    return res;
};

var isNumber = function(input) {
    for(var i=0; i<input.length; i++) {
        if(input[i] === '-' || input[i] === '+' || input[i] === '*')  return false;
    }
    return true;
}