/*
Suppose you have a random list of people standing in a queue. 
Each person is described by a pair of integers (h, k), 
where h is the height of the person and k is the number of people in front of this person 
who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.
Note: The number of people is less than 1,100.
Example
Input:[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
Output:[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/
/**
 * @param {number[][]} people
 * @return {number[][]}
 * [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
 * sort by h first, if h equals, sort by k: [7, 0] [7, 1] [6, 1]  [5, 0] [5, 2] [4, 4]
 since [7,0] has 0 = stack.length push [7.0]
 since [7,1] has 1 = stack.length push [7.1] st = [7,0][7.1]
 since [6,1] has 1<stack.length insert in index 1 = [7,0][6,1][7.1]
 since [5,0] has 0<stack.length insert in index 0 = [5,0][7,0][6,1][7.1]
 since [5,2] has 2<stack.length insert in index 2 = [5,0][7,0][5,2][6,1][7.1]
 since [4,4] has 4<stack.length insert in index 4 = [5,0][7,0][5,2][6,1][4,4][7.1]
 
 */
var reconstructQueue = function(people) {
    var stack = [];
    people.sort(compare);
    for(var i=0; i<people.length; i++) {
        if(people[i]>= stack.length) {
            stack.push(people[i]);
        } else {
            stack.splice(people[i][1], 0, people[i]); 
        }
    }
    return stack;
    
    function compare(a,b) {
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return b[0] - a[0];
    }

};
