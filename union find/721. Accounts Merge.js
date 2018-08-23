/*
Given a list accounts, each element accounts[i] is a list of strings, where the first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.
Now, we would like to merge these accounts. Two accounts definitely belong to the same person if there is some email that is common to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.
After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.
Example 1:
Input: 
accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]
Output: [["John", 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]
Explanation: 
The first and third John's are the same person as they have the common email "johnsmith@mail.com".
The second John and Mary are different people as none of their email addresses are used by other accounts.
We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'], ['John', 'johnnybravo@mail.com'], 
['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.
*/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    var root = [], result = [], i, j;
    // Init root to be itself for each node.
    for(i = 0; i< accounts.length; i++) {
        root[i] = i;
    }
    // construct union, each node point to its parent as root. Noted, could not be the ultimate root.
    for(i = 0; i< accounts.length; i++) {
        for(j = i+1; j< accounts.length; j++) {
            if(hasIntersection(accounts[i], accounts[j])) {
                var rooti = find(root, i);
                var rootj = find(root, j);
                root[rooti] = rootj;
            }
        }
    }
    // Caculate again for the ultimate root for each node.
    for(i =0 ;i< root.length; i++) {
        root[i] = find(root, i);
    }
    // Construct a map to store the root pointed name with all related email accounts has same root.
    var map = {};
    for(i = 0 ;i< root.length; i++) {
        if(!map[root[i]]) {
            map[root[i]] = accounts[i].slice(1);
        } else {
            map[root[i]] = map[root[i]].concat(accounts[i].slice(1));
        }
    }
    // handle each value to be de-dupplicated and sorted.
    for (var key in map) {
        var value = [...new Set(map[key])];
        value = value.sort((a,b) =>{
              if(a < b) return -1;
              if(a > b) return 1;
              return 0;
        });
        result.push([accounts[key][0]].concat(value));
    }
    return result;
};

var hasIntersection = function(account1, account2) {
    if(account1[0] !== account2[0]) {
        return false;
    }
    var set1 = new Set(account1.slice(1));
    var set2 = new Set(account2.slice(1));
    return new Set([...set1, ...set2]).size < (set1.size + set2.size);
};

var find = function(root, i) {
    if(root[i] === i) return i;
    return find(root, root[i]);
}
