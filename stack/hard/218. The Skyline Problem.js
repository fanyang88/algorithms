/*
A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

Buildings  Skyline Contour
The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].
*/

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 
special case can be eliminated by sorting.
 
 we can construct the input to be a series of events
 events = {{x: L, height: -H}  // for entering event
           {x: R, height: H}}  // for leaving event
           
           if it is entering should sort by larger to smaller
           if it is leaving should sort by smaller to larger
           so by change to negative for entering, we can make sort to be all smaller to larger
           
for the first time, the prevMAx = null, we can direct push the height, and put it on result
for the second time, if the new incoming height smaller than prev, that is prevMax still the same, push to stack only, otherwise, we also update the prevMax and add it to result
for leaving event, if the height after removed from stack won't change the prevMax, means it get shadowed, then that's it, otherwise, we also update the prevMax and add the curMax to result
 */


var getSkyline = function(buildings) {
    var res = [], height = [], pq = [0], prevMax = null;
    for(var b of buildings) {
        height.push([b[0], -b[2]]);
        height.push([b[1],  b[2]]);
    }
    height.sort((a, b) => {
        if(a[0] === b[0])  return a[1] - b[1];
        return a[0] - b[0];
    });
   
    for(var h of height) {
        if(h[1] < 0) {
            pq.push(-h[1]);
        } else {
            remove(pq, h[1]);
        }
        
        var maxV = Math.max(...pq);
        if(prevMax !== maxV) {  // maxV changed after remove h[1]
            res.push([h[0], maxV]);
            prevMax = maxV;
        }
    }
    return res;
};

var remove = function(arr, val) { // remove the first element equal to val
    var ind = -1;
    for(var i=0; i<arr.length; i++) {
        if(val === arr[i]) {
            ind = i;
            break;
        }
    }
    arr.splice(ind, 1); // This is the key.
    return;
};