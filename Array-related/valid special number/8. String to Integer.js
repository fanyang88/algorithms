// Implement atoi to convert a string to an integer.
/**
 * @param {string} str
 * @return {number}
  Integer max = 2147483647, min = -2147483648;
 */
var myAtoi = function(str) {
    var flag=1, i=0, sum=0;
    str = str.trim();
    if(str.length ===0) return 0;
    if(str[i] === '-' || str[i] === '+') {
        var flag = str[i] === '-' ? -1 : 1;
        i++;
    }
    while(str[i] >= '0' && str[i] <= '9' && i< str.length) {
        sum = sum * 10 + parseInt(str[i++]);
    }
    sum *= flag;
    if(sum > Math.pow(2, 31)-1)  return Math.pow(2, 31)-1;
    if(sum < -Math.pow(2, 31))  return -Math.pow(2, 31);
    return sum;
};
