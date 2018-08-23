/*
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

Example:
Input: "25525511135"
Output: ["255.255.11.135", "255.255.111.35"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */

 // dfs version

var restoreIpAddresses = function(s) {
    var res= [];
    dfs(0, 0, '', res, s);
    return res;
};

var dfs = function(index, k, cur, res, s) {
    if(k===4) {
        if(index === s.length) {
            res.push(cur.substring(0, cur.length-1));
        }
        return;
    }
    for(var len=1; len<=3; len++) {
        var sub = s.substr(index, len);
        if(sub[0] === '0' && len>1)  continue;
        if(+sub > 255)  continue;
        dfs(index + len, k+1, cur+sub+'.', res, s);
    }
};


// non -dfs version

var restoreIpAddresses = function(s) {
    var res = [];
    for(var a=1; a<=3; a++) {
        for(var b=1; b<=3; b++) {
            for(var c=1; c<=3; c++) {
                var d= s.length - a- b-c;
                if(d<=0)  continue;
                var A = s.substr(0, a);
                var B = s.substr(a, b);
                var C = s.substr(a+b, c);
                var D = s.substr(a+b+c, d);
                if(isInvalid([A, B, C, D]))  continue;
                res.push(A+'.'+B+'.'+C+'.'+D);
            }
        }
    }
    return res;
};

var isInvalid = function(arr) {
    for(var item of arr) {
        if(item.length > 1 && item[0] === '0') return true;
        if(+item > 255 || +item < 0) return true;
    }
    return false;
}