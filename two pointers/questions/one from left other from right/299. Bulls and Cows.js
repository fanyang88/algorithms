/*
You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. 

Please note that both secret number and friend's guess may contain duplicate digits.

Example 1:

Input: secret = "1807", guess = "7810"

Output: "1A3B"

Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.
Example 2:

Input: secret = "1123", guess = "0111"

Output: "1A1B"

Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.
*/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
the first pass, store the char from secret in map that not matching guess in the same position
the second pass, check guess, if the number in guess exist in map cow++
 */
var getHint = function(secret, guess) {
    var map = {}, bull=0, cow=0;
    for(var i=0; i<secret.length; i++) {
        if(secret[i] === guess[i]) {
            bull++;
        } else {
            map[secret[i]] = map[secret[i]] ? map[secret[i]]+1  :1;
        }
    }
    for(var i=0; i<secret.length; i++) {
        if(guess[i] !== secret[i] && map[guess[i]] > 0) {
            cow++;
            map[guess[i]] --;
        }
    }
    return bull+'A' + cow +'B';
};
