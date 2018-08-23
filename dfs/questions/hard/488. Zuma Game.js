/*
Think about Zuma Game. You have a row of balls on the table, colored red(R), yellow(Y), blue(B), green(G), and white(W). 
You also have several balls in your hand.
Each time, you may choose a ball in your hand, and insert it into the row (including the leftmost place and rightmost place). 
Then, if there is a group of 3 or more balls in the same color touching, remove these balls. 
Keep doing this until no more balls can be removed.
Find the minimal balls you have to insert to remove all the balls on the table. If you cannot remove all the balls, output -1.
Examples:
Input: "WRRBBW", "RB"             Output: -1
Explanation: WRRBBW -> WRR[R]BBW -> WBBW -> WBB[B]W -> WW

Input: "WWRRBBWW", "WRBRW"          Output: 2
Explanation: WWRRBBWW -> WWRR[R]BBWW -> WWBBWW -> WWBB[B]WW -> WWWW -> empty

Input:"G", "GGGGG"            Output: 2
Explanation: G -> G[G] -> GG[G] -> empty 

Input: "RBYYBBRRB", "YRBGB"         Output: 3
Explanation: RBYYBBRRB -> RBYY[Y]BBRRB -> RBBBRRB -> RRRB -> B -> B[B] -> BB[B] -> empty 
Note:
You may assume that the initial row of balls on the table won’t have any 3 or more consecutive balls with the same color.
The number of balls on the table won't exceed 20, and the string represents these balls is called "board" in the input.
The number of balls in your hand won't exceed 5, and the string represents these balls is called "hand" in the input.
Both input strings will be non-empty and only contain characters 'R','Y','B','G','W'.
*/

/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 
 for example:RBYYBBRRB
 we can either insert two balls after R: R[RR]BYYBBRRB  -> (update baord)  BYYBBRRB -> continue dfs
            or insert two balls after B: RB[BB]YYBBRRB  -> (update baord) RYYBBRRB -> continue dfs
             or insert one ball after Y: RBYY[Y]BBRRB  -> (update baord) B -> continue dfs
             ....
 */
var findMinStep = function(board, hand) {
    var map = {};
    for(var i=0; i<hand.length; i++) {
        map[hand[i]] = map[hand[i]] ? map[hand[i]]+1 :1;
    }
    return dfs(board, map);
};

var dfs = function(board, map) {
    if(board.length === 0)  return 0; //no need to insert any balls;
    var minV = Number.MAX_VALUE;
    var i=0; // i is the place we want to insert balls
    var j=0;  // j point to the next place we can insert balls
    
    while( i< board.length) {
        while(j < board.length && board[i] === board[j]) j++;
        
        var neededBallsNum = 3-(j-i);           // caculate how many balls needed to clear balls from i to j-1, either 1 or 2
        var color = board[i];
        if(map[color] && map[color] >= neededBallsNum) {
            map[color] = map[color]-neededBallsNum;
            var newBoard = update(board.substr(0, i) + board.substr(j)); // update board to remove continuous same color balls
            var val = dfs(newBoard, map);
            if(val >=0)  minV = Math.min(minV, val + neededBallsNum);
            map[color] = map[color] + neededBallsNum;
        }
        i= j;               // i point to the next pos to insert ball
    }
    return minV === Number.MAX_VALUE ? -1 : minV;
};

var update= function(board) {
    var i=0;
    while(i< board.length) {
            var j = i;
            while(i < board.length && board[i] === board[j]) {
                j++;
            }
            if(j-i >= 3) {
                board = board.substr(0, i) + board.substr(j);
                i=0;
            } else {
                i++;
            }
    }
    return board;
};
