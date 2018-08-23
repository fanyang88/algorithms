/*
Solve a given equation and return the value of x in the form of string "x=#value". 
The equation contains only '+', '-' operation, the variable x and its coefficient.
If there is no solution for the equation, return "No solution".
If there are infinite solutions for the equation, return "Infinite solutions".
If there is exactly one solution for the equation, we ensure that the value of x is an integer.
Example 1:
Input: "x+5-3+x=6+x-2"
Output: "x=2"
Example 2:
Input: "x=x"
Output: "Infinite solutions"
Example 3:
Input: "2x=x"
Output: "x=0"
Example 4:
Input: "2x+3x-6x=x+2"
Output: "x=-1"
Example 5:
Input: "x=x+2"
Output: "No solution"
*/

/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
    // add + in front of all -
    var str = '';
    for(var i=0; i<equation.length; i++) {
        if(i > 0 && equation[i]=== '-') {
            str += '+';
        } 
        str += equation[i];
    }
    var arr = str.split('=');
    var left = getParas(arr[0].split('+'));
    var right = getParas(arr[1].split('+'));
    if(left[0] === right[0]) {
        if(left[1] === right[1]) return "Infinite solutions";
        else return 'No solution';
    } 
    return 'x='+(right[1] - left[1])/(left[0] - right[0]);  
};

var getParas = function(arr) {
     var sumX = 0, sumI = 0;
    for(var item of arr) {
        if(item.indexOf('x') >=0) {
            item = item.replace('x', '');
            if(item === '-') sumX += -1;
            else if(item === '') sumX += 1;
            else sumX += parseInt(item);
        } else {
            sumI += parseInt(+item);
        }
    }
    return [sumX, sumI];
};
