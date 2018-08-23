/*
Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
*/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 "A","A","A","B","B","B"  
 we can arrange it to :
 A  B  #    A  B  #  A  B
 |-n+1-|    |-n+1-|  p
 largest freq is A = 3
 so we have (3-1) * (n+1) slots plus the number of tasks that have same freq with A
 the answer is (largest freq-1) * (n-1) + number of tasks that have largest freq
 
 special case is without adding any intervals the tasks can be filled.
 */
var leastInterval = function(tasks, n) {
    if(n===0) return tasks.length;
    var arr= new Array(26).fill(0), count = 0;
    for(var task of tasks) {
        arr[task.charCodeAt(0) - 'A'.charCodeAt(0)] ++;
    }
    var maxFreq = Math.max(...arr);
    var count = arr.reduce((n, val) => n + (val === maxFreq), 0);
    var ideal = (maxFreq-1) * (n+1) + count;
   return Math.max(ideal, tasks.length);
    
};
