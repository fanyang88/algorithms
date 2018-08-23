/*
You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to determine if the starting player can guarantee a win.

Example:

Input: s = "++++"
Output: true 
Explanation: The starting player can guarantee a win by flipping the middle "++" to become "+--+".

*/

/**
 * @param {string} s
 * @return {boolean}
 
 similar as Can I win
              ++++
       /        |         \
  p1 --++     +--+       ++--
      |         |          |
  p2 ----      lose       ----
  
  for p1: if(s.indexOf('++') < 0)  it lose return false;
  for every '++' position
  we run dfs on p2 to see if p2 can have a lose, if it has, then p1 can win
 
 */
var canWin = function(s) {
    var map = {}, arr = s.split(''), set = new Set();
    return dfs(s, map);
};

var dfs = function(s, map) {
    if(s.indexOf('++') < 0)  return false;
    if(map[s] !== undefined)  return map[s] === 1;
    for(var pos of _findFlipPosition(s)) {
        var t = s.substring(0, pos) + '--' + s.substring(pos+2, s.length);
        if(!dfs(t, map))  {
            map[s] = 1;
            return true;
        }
    }
    map[s] = -1;
    return false;
};

var _findFlipPosition = function(s) {
    var res = [];
    for(var i=0; i<s.length; i++) {
        if(s[i] === s[i+1] && s[i] === '+')  res.push(i);
    }
    return res;
};