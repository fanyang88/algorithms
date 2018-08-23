/*
Given a list of daily temperatures, produce a list that, for each day in the input, 
tells you how many days you would have to wait until a warmer temperature. 
If there is no future day for which this is possible, put 0 instead.
For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73], 
your output should be [1, 1, 4, 2, 1, 1, 0, 0].
Note: The length of temperatures will be in the range [1, 30000]. 
Each temperature will be an integer in the range [30, 100].
*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 to find the next larger element, using stack
 [73, 74, 75, 71, 69, 72, 76, 73]
 st = [0]  since 74>73  res[0] = 1-0  st=[1]
 st = [1]  since 75>74  res[1] = 2-1  st=[2]
 st = [2]  since 71<75  push 3 st=[2, 3]
 st = [2, 3]  since 69<71  push 4 st=[2, 3, 4]
 st=[2, 3, 4] since 72 > 69 pop 4, res[4] = 5-4=1 since 71<72 pop 3, res[3] = 5-3=2  st=[2, 5]
 st=[2,5]  since 76>72, pop 5, res[5]=6-5=1 res[2] = 6-2=4  st= [6]
 st= [6] since 73<76 keep push st= [6,7]
 */
var dailyTemperatures = function(temperatures) {
    var st = [], n=temperatures.length, res= new Array(n).fill(0);
    for(var i=0; i<n; i++) {
        while(st.length > 0 && temperatures[st[st.length-1]] < temperatures[i]) {
            var idx = st.pop();
            res[idx] = i - idx;
        }
        st.push(i);
    }
    return res;
};