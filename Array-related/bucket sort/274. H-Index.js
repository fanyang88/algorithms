/*
Given an array of citations (each citation is a non-negative integer) of a researcher, 
write a function to compute the researcher's h-index.
According to the definition of h-index on Wikipedia: 
"A scientist has index h if h of his/her N papers have at least h citations each, 
and the other N − h papers have no more than h citations each."
For example, given citations = [3, 0, 6, 1, 5], 
which means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. 
Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, 
his h-index is 3.
Note: If there are several possible values for h, the maximum one is taken as the h-index.
*/

/**
 * @param {number[]} citations
 * @return {number}
 use bucket sort, for n paper, put each number in different bucket
 e.g: [3, 0, 6, 1, 5]
buckets: [0] = 1 [1] = 1 [2] = 0 [3] = 1 [5] = 1  [6] =1
traverse from end to start, once the total count > index, this index would be the h index
 */
var hIndex = function(citations) {
    if(citations.length === 0)  return 0;
    var maxV =  Math.max(...citations);
    var buckets = new Array(maxV).fill(0), total = 0;
    for(var i=0; i<citations.length; i++) {
        buckets[citations[i]] = buckets[citations[i]] ? buckets[citations[i]]+1 : 1;
    }
    for(var i=buckets.length-1; i>=0; i--) {
        total += buckets[i];
        if(total >= i) {
            return i;
        }
    }
    return 0;
};

