/*
Given n non-negative integers representing the histogram's bar height 
where the width of each bar is 1, find the area of largest rectangle 
in the histogram.

Above is a histogram where width of each bar is 1, given height = [2,1,5,6,2,3].
The largest rectangle is shown in the shaded area, which has area = 10 unit.

Example:
Input: [2,1,5,6,2,3]
Output: 10
*/

/**
 * @param {number[]} heights
 * @return {number}
    for example: [2,1,5,6,2,3] -> add 0 to the end [2,1,5,6,2,3,0] 
                                            index: [0,1,2,3,4,5,6]
i=0: push 2 st: [0]
i=1: since hist[1] < hist[top]=2, pop 0, st is E, area= 2* i=2, push 1   st: [1]    
i=2: since hist[2]=5 > hist[top]=1, push 2, st: [1, 2]
i=3: since hist[3]=6 > hist[top]=5, push 3, st: [1, 2, 3]
i=4: since hist[4]=2 < hist[top]=6, pop 3, area= 6* (i-top-1)= 6*(4-2-1)=6   st: [1, 2]
i=4: since hist[4]=2 < hist[top]=5, pop 2, area= 5* (i-top-1)= 5*(4-1-1)= 10   st: [1]
i=4: since hist[4]=2 > hist[top]=1, push 4, st: [1, 4]
i=5: since hist[5]=3 > hist[top]=2, push 5, st: [1, 4, 5]
i=6: since hist[6]=0 < hist[top]=5, pop 5, area= 3* (i-top-1)= 3*(6-4-1)= 3  st: [1, 4]
i=6: since hist[6]=0 < hist[top]=2, pop 4, area= 2* (i-top-1)= 2*(6-1-1)= 8  st: [1]
i=6: since hist[6]=0 < hist[top]=1, pop 1, st is E, area= 1* i =6  st: []

Another simple example: 2, 1, 2
count from 1: max_area= 3
i=0: push 0
i=1: since hist[1]=1 < hist[st.top]=2, pop 0, st is E, area= 2*i=2, push 1
i=2: push 2
i=3: dummy=0 < hist[st.top]=2, pop 2, area= 2*(i-st.top-1)=2*(3-1-1)=2
     dummy=0 < hist[st.top]=1, pop 1, st is empty, area= 1*i=3
 */
var largestRectangleArea = function(heights) {
    if(heights.length ===0 )  return 0;
    heights.push(0);
    var maxV = 0, st = [], area;
    for(var i=0; i<heights.length; i++) {
        var curH = heights[i];
        while(st.length >0 && curH < heights[st[st.length-1]]) {
            var prev = st.pop();
            if(st.length === 0)  {
                area = i * heights[prev]; // for example: [5,6,4] when come to 4, we can get 1*6, and 2*5
            } else {
                area = (i-st[st.length-1]-1) * heights[prev]; // can't use prev to replace st[st.length-1]+1, since may not equal
            }
            maxV = Math.max(area, maxV);
        }
        st.push(i);
    }
    return maxV;
};