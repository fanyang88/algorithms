/*
The API: int read4(char *buf) reads 4 characters at a time from a file.
The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.
By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.
Note: The read function may be called multiple times.
*/
/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 if buf has more elements than needed, return the needed size
 if buf has less, call read4 to get enough
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    var readPos = 0, writePos= 0; 
    // the read place in the cache, and write to place in the cache 
    var cache = [];
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        for(var i=0; i<n; i++) {
            if(readPos === writePos) { // buf is reading to the end, need new values
                writePos = read4(cache);
                readPos = 0;
                if(writePos === 0)  return i; // no more chars can be input
            }
            buf[i] = cache[readPos++];
        }
        return n;
    };
};
