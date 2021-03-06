/*
We have jobs: difficulty[i] is the difficulty of the ith job, 
and profit[i] is the profit of the ith job. 
Now we have some workers. worker[i] is the ability of the ith worker, 
which means that this worker can only complete a job with difficulty at 
most worker[i]. 
Every worker can be assigned at most one job, 
but one job can be completed multiple times.
For example, if 3 people attempt the same job that pays $1, 
then the total profit will be $3.  If a worker cannot complete any job, 
his profit is $0.
What is the most profit we can make?

Example 1:
Input: difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
Output: 100 
Explanation: Workers are assigned jobs of difficulty [4,4,6,6] 
and they get profit of [20,20,30,30] seperately.
*/


/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 
 since worker with bigger ability can get either same profit or bigger profit later on with smaller ability workers.
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    var profits = {}, sum=0, N = difficulty.length;
    for(var i=0; i<difficulty.length; i++) {
        profits[difficulty[i]] = 
            profits[difficulty[i]] ? Math.max(profit[i], profits[difficulty[i]]) : profit[i];
    }
    difficulty.sort((a, b) => {return a-b; });
    worker.sort((a, b) => {return a-b; });
    
    var maxV = 0, i=0;
    for(var ability of worker) {
        while(i < N && difficulty[i] <= ability) {
            maxV = Math.max(maxV, profits[difficulty[i]]);
            i++;
        }
        sum += maxV;
    }
    return sum;
};
