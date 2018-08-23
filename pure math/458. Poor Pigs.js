/*
There are 1000 buckets, one and only one of them contains poison, 
the rest are filled with water. They all look the same. 
If a pig drinks that poison it will die within 15 minutes. 
What is the minimum amount of pigs you need to 
figure out which bucket contains the poison within one hour.

Answer this question, and write an algorithm for the follow-up general case.

Follow-up:

If there are n buckets and a pig drinking poison will die within m minutes, 
how many pigs (x) you need to figure out the "poison" bucket within p minutes? 
There is exact one bucket with poison.
*/

/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 
 Thinking Process
1. What if you only have one shot?
Eg. 4 buckets, 15 mins to die, and 15 mins to test.
The answer is 2. Suppose we use A and B to represent pigs, we could have
Buckets     0   1   2   3
            00  01  10  11
drink by         B  A   AB 

Conclusion: If we have x pigs, we could use them to represent (encode) 2^x buckets.


2. What if we could have more than one attempts?

Eg. 4 buckets, 15 mins to die, and 30 mins to test.

At the moment, I consider the problem as an encoding problem: With more attempts, 
how to use fewer pigs to represent all the buckets?
What does the binary form mean? It's much easier if we regard it as:
0 means the pig does not drink.
1 means the pig drinks in the first (and only) round.

We could generalise with:
0 means the pig does not drink.
1 means the pig drinks in the first round.
2 means the pig drinks in the second round.
...
t means the pig drinks in the t-th round and die.
Conclusion: If we have t attempts, we could use t+1-based number to represent (encode) the buckets. 
(That's also why the first conclusion uses the 2-based number)

Example
Eg. 8 buckets, 15 mins to die, and 40 mins to test.
We have 2 (= (40/15).floor) attempts, as a result we'll use 3-based number to encode the buckets.

Bucket          0       1    2     3    4     5     6     7
3-based         00      01  02    10   11    12    20    21
firstRound      __      _B  __    A_   AB    A_    __    _B
sec round       __      __  _B    __   __    _B    A_    A_

For example 3-based number 02 means: the pig A does not drink and die, and the pig B drinks in the second round and die.
3^x = 8  x = ceil(log(8, 3))


 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {
    var pig=0;
    var base = ~~(minutesToTest / minutesToDie) +1;
    while(Math.pow(base, pig) < buckets) {
        pig++;
    }
    return pig;
};
