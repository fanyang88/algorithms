// Follow up for H-Index: What if the citations array is sorted in ascending order? Could you optimize your algorithm?

/**
 * @param {number[]} citations
 * @return {number}
 use binary searh, the goal is to find the citation[index] <= citation.length - index
 if(citation[index] > citation.length - index) { search on left} otherwise, keep search on right
 */
var hIndex = function(citations) {
    var len = citations.length;
    if(len === 0)  return 0;
    var start = 0, end = citations.length-1;
    while(start <= end) {
        var mid = parseInt(start + (end-start)/2);
        if(citations[mid] >= len - mid) {
            end = mid -1; // search on left
        } else {
            start = mid+1; // keep searching on right
        }
    }
    return len - start;
};
