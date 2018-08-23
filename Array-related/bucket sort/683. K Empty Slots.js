/*
There is a garden with N slots. In each slot, there is a flower. The N flowers will bloom one by one in N days. In each day, 
there will be exactly one flower blooming and it will be in the status of blooming since then.
Given an array flowers consists of number from 1 to N. Each number in the array represents the place where the flower will open in that day.

For example, flowers[i] = x means that the unique flower that blooms at day i will be at position x, 
where i and x will be in the range from 1 to N.
Also given an integer k, you need to output in which day there exists two flowers in the status of blooming, 
and also the number of flowers between them is k and these flowers are not blooming.
If there isn't such day, output -1.
Example 1:
Input: 
flowers: [1,3,2]
k: 1
Output: 2
Explanation: In the second day, the first and the third flower have become blooming.
Example 2:
Input: 
flowers: [1,2,3]
k: 1
Output: -1
*/

/**
 * @param {number[]} flowers
 * @param {number} k
 * @return {number}
 
 
 use bucket sort
 partition the pots into buckets, each size is k+1, total number =n/k+1
 b[0]: 1~k+1  b[1]: k+2~2k+2 ....
 
 Track the min and max of each bucket
 for each flower at pos x, bucket number bx= x/k+1
 if min in bucket bx equals x and max value in bucket bx-1 = x-k-1, we found a match, return current flower index+1
 if max in bucket bx equals x and min value in bucket bx+1 = x+k+1, we found a match, return current flower index+1
 
the reason for each flower, we need to check the max from previous bucket and the min from next bucket, is because there are the most closest flowers to my current flower.
 */
var kEmptySlots = function(flowers, k) {
    var n = ~~(flowers.length / (k+1));
    var maxInBuckets = new Array(n+1).fill(Number.MIN_SAFE_INTEGER);
    var minInBuckets = new Array(n+1).fill(Number.MAX_SAFE_INTEGER);
    
    for(var i=0; i<flowers.length; i++) {
        var x = flowers[i];
        var bx = ~~(x / (k+1)); // which bucket it belongs to.
        
        if(x < minInBuckets[bx]) {
            minInBuckets[bx] = x;
            // check previous bucket, see if the max equals x-(k+1)
            if(maxInBuckets[bx-1] && maxInBuckets[bx-1] === x-(k+1))  return i+1;
        }
        
        if(x > maxInBuckets[bx]) {
            maxInBuckets[bx] = x;
            // check previous bucket, see if the max equals x-(k+1)
            if(minInBuckets[bx+1] && minInBuckets[bx+1] === x+(k+1))  return i+1;
        }
    }
    return -1;
};
