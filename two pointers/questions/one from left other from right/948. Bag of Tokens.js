/*
You have an initial power P, an initial score of 0 points, and a bag of tokens.
Each token can be used at most once, has a value token[i], and has potentially two ways to use it.
If we have at least token[i] power, we may play the token face up, losing token[i] power, and gaining 1 point.
If we have at least 1 point, we may play the token face down, gaining token[i] power, and losing 1 point.
Return the largest number of points we can have after playing any number of tokens.

Example 1:
Input: tokens = [100], P = 50
Output: 0

Example 2:
Input: tokens = [100,200], P = 150
Output: 1

Example 3:
Input: tokens = [100,200,300,400], P = 200
Output: 2
*/

/**
 * @param {number[]} tokens
 * @param {number} P
 * @return {number}
 
 Tranlations:
You have a bag of tokens, from which you can take whichever token you want, 
and after you take one, you can't put it back to the bag, meaning you can use every token at most once.
You start the game with P power and 0 point.

For every tokens[i], you can use it in either way:
- plus tokens[i] powers, and minus 1 point;
- or, minus tokens[i] powers, and plus 1 point.
(meaning you exchange your powers to get 1 point, or exchange your point to get more powers)
But you have to make sure that during the process, both your powers>=0 and points>=0, 
otherwise you would have to stop playing the game.
And you can use just some of the tokens (don't have to use all of them).
Your target is to get the maximum points possible.

e.g: [100,200,300,400]  P=200
since P=200, we exchange power to points P=100 score=1
since power< 200, exchange score to power, P=500 score=0
since power > 200, exchange power to points, P=300 score=1
since power =300, exchange power to score, score=2

two pointers, when restPower < left, score++, right--, otherwise, score--, left++
 */
var bagOfTokensScore = function(tokens, P) {
    tokens = tokens.sort((a, b) => a-b);
    var left= 0, right = tokens.length-1, restPower = P, score = 0, maxScore = 0;
    while(left <= right) {
        if(restPower >= tokens[left]) {
            score ++;
            restPower -= tokens[left];
            if(restPower <0)  break;
            left ++;
        } else {
            score --;
            if(score < 0)  break;
            restPower += tokens[right];
            right--;
        }
        maxScore = Math.max(maxScore, score);
    }
    return maxScore;
};
