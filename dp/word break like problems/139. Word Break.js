/*
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, 
determine if s can be segmented into a space-separated sequence of one or more dictionary words. 
You may assume the dictionary does not contain duplicate words.
For example, given
s = "leetcode",
dict = ["leet", "code"].
Return true because "leetcode" can be segmented as "leet code".
*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 
e.g: s= "hatmeof"  ['hat', 'me', 'of']
the point is to find a k could make p[i] = true, if not, then p[i] = false;
p[i] = true      if  S[0,i] is in dictionary or if p[k] == true and S[k+1,j] is in dictionary (0<k<i)
            = false      if    no such k exist.
if there is an k(i-1>=k>=0)，to make s[k:i-1] in dict, then s can be segment
when i=1  (check h)
k=0: p[1]= p[0](which is a dummy head to be true) && s.sub(0+1, 1-0)[h](false) =false

when i=2 (check ha)
k=0: p[2]= p[0](true) && s.sub(0+1, 2-0)[ha](false) =false
k=1: p[2]= p[1](false) && s.sub(1+1, 2-1)[a](false) =false
    p[2]= false, end loop
    
when i=3 (check hat)
k=0: p[3]= p[0](true) && s.sub(0+1, 3-0)[hat](true) =true   
    p[3]= true, break
    
when i=4 (check hatm)
k=0: p[4]= p[0](true) && s.sub(0+1, 4-0)[hatm](false) =false
k=1: p[4]= p[1](false) && s.sub(1+1, 4-1)[atm](false) =false
k=2: p[4]= p[2](false) && s.sub(2+1, 4-2)[tm](false) =false
k=3: p[4]= p[3](true) && s.sub(3+1, 4-3)[m](false) =false
    p[4]= false, end loop
    
when i=5 (check hatme)
k=0: p[5]= p[0](true) && s.sub(0+1, 5-0)[hatme](false) =false
k=1: p[5]= p[1](false) && s.sub(1+1, 5-1)[atme](false) =false
k=2: p[5]= p[2](false) && s.sub(2+1, 5-2)[tme](false) =false
k=3: p[5]= p[3](true) && s.sub(3+1, 5-3)[me](true) =true
    p[5]= true, break
    
when i=6 (check hatmeo)
k=0: p[6]= p[0](true) && s.sub(0+1, 6-0)[hatmeo](false) =false
k=1: p[6]= p[1](false) && s.sub(1+1, 6-1)[atmeo](false) =false
k=2: p[6]= p[2](false) && s.sub(2+1, 6-2)[tmeo](false) =false
k=3: p[6]= p[3](true) && s.sub(3+1, 6-3)[meo](false) =false
k=4: p[6]= p[4](false) && s.sub(4+1, 6-4)[eo](false) =false
k=5: p[6]= p[5](true) && s.sub(5+1, 6-5)[o](false) =false
    p[6]= false, end loop
    
when i=7 (check hatmeof)
k=0: p[7]= p[0](true) && s.sub(0+1, 7-0)[hatmeof](false) =false
k=1: p[7]= p[1](false) && s.sub(1+1, 7-1)[atmeof](false) =false
k=2: p[7]= p[2](false) && s.sub(2+1, 7-2)[tmeof](false) =false
k=3: p[7]= p[3](true) && s.sub(3+1, 7-3)[meof](false) =false
k=4: p[7]= p[4](false) && s.sub(4+1, 7-4)[eof](false) =false
k=5: p[7]= p[5](true) && s.sub(5+1, 7-5)[of](true) =true
    p[6]= true, break
    
since p[n-1]= true, can be segmented
*/

var wordBreak = function(s, wordDict) {
    var dp = [];
    dp[0] = true; // dummy head
    for(var i=1; i<=s.length; i++) {
        for(var k=0; k<i; k++) {
            if(dp[k] && wordDict.indexOf(s.substring(k, i)) > -1) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length] ? true : false;
};
