/*
Divide two integers without using multiplication, division and mod operator.
If it is overflow, return MAX_INT.
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}

  e.g:  36/3
 rest= 36 div = 3  div*10 < 36 div = 30 step = 10 since div*10>36  stop loop rest = 36-30=6 
 rest= 6  div = 3  div*10>6  div=3 step+=1  rest = 6-3=3  
 rest= 3  div = 3  div*10>6  div=3 step+=1  rest = 3-3=0 < div=3 stop
 step=12
 
 */
var divide = function(dividend, divisor) {
    var flag = dividend*divisor < 0 ? -1 : 1;
    
    // Handle special cases first
    if(Math.abs(divisor) > Math.abs(dividend))  return 0;
    if(Math.abs(divisor) === Math.abs(dividend))  return flag;
     if(dividend=== -2147483648 && Math.abs(divisor) === 1)   {
         return divisor === 1 ? -2147483648 : 2147483647;
     }
     if(dividend=== 2147483647 && Math.abs(divisor) === 1)  {
         return divisor === 1 ? 2147483647 : -2147483648;
     }
    
    var count = 0, step, newDivisor;
    var rest = Math.abs(dividend);
    var divisor = Math.abs(divisor);
    
    while(rest > divisor){
        newDivisor = divisor;
        step=1;
        while(newDivisor * 10 < rest) {
            newDivisor *= 10;
            step *= 10;
        }
        count += step;
        rest -= newDivisor;
    }
    if(rest === divisor) count++;
    return count*flag;
};
