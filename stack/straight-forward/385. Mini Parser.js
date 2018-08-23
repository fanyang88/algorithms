/*
Given a nested list of integers represented as a string, implement a parser to deserialize it.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Note: You may assume that the string is well-formed:

String is non-empty.
String does not contain white spaces.
String contains only digits 0-9, [, - ,, ].
Example 1:

Given s = "324",

You should return a NestedInteger object which contains a single integer 324.
Example 2:

Given s = "[123,[456,[789]]]",

Return a NestedInteger object containing a nested list with 2 elements:

1. An integer containing value 123.
2. A nested list containing two elements:
    i.  An integer containing value 456.
    ii. A nested list with one element:
         a. An integer containing value 789.

*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 
 the add() method adds a NestedInteger object to the caller. e.g.:
  outer = NestedInteger() # []
  nested = NestedInteger(5)
  outer2 = nested = NestedInteger(5)
  outer.add(nested) # outer is now [5]
  outer2.add(outer) # outer2 is now [5, [5]]

 when we encounter a '[', we should put current obj into stack, and start a new object
 when we encounter a ',', as long as its previous one is not ']', we can make current value a obj and add to current obj,[x,y...]
 when we encounter a ']', we should make current value a obj and add to current obj, if the stack has value, means 
 [3,[4,5]]
 stack=null, cur = null
 i=0 start a new obj cur
 i=2 get current value 3 and add into cur, cur = [3]
 i=3 cur is not E, push cur into st, st = [3]  cur = a new obj
 i=5 cur = [4] 
 i=7 cur = [4,5] since there is value in st, we should pop st value = [3] and add [4,5] into it = [3,[4,5]]
 i=8 no number, no need to append to current, no value in st either
 
 */
var deserialize = function(s) {
    if (s.length === 0)   return null;
    if (s[0] !== '[')  return new NestedInteger(parseInt(s));   // 324
    
    var st= [], cur = null, j=0; //j point to the start of a number string, i point to the end of a number string
    for(var i=0; i<s.length; i++) {
        if(s[i] === '[') {
            if(cur)  {
                st.push(cur);
            }
            cur = new NestedInteger();
            j= i+1;     // start a number from i+1
        } else if(s[i] === ',') {
            if(i!==j) {  // there is a number
                cur.add(new NestedInteger(+s.substring(j, i)));
            }
            j= i+1;
        } else if(s[i] === ']') {
            if(i!==j) { // there is a number
                cur.add(new NestedInteger(+s.substring(j, i)));
            }
            if(st.length > 0) {
                var prev = st.pop();
                prev.add(cur);
                cur = prev;
            }
            j= i+1;
        }
    }
    return cur;
};
