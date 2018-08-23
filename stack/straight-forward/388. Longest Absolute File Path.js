/*
Suppose we abstract our file system by a string in the following manner:
The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:
dir
    subdir1
    subdir2
        file.ext
The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.
The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:
dir
    subdir1
        file1.ext
        subsubdir1
    subdir2
        subsubdir2
            file2.ext
The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.
We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).
Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.
Note:
The name of a file contains at least a . and an extension.
The name of a directory or sub-directory will not contain a ..
Time complexity required: O(n) where n is the size of the input string.
*/

/**
 * @param {string} input
 * @return {number}
 split string by \n first, count how many \t in each string indicate on which level it at,
 using a stack to monitor file path.
 e.g:  
 "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
 item1 = dir  st=['dir']  sum = 3
 item2 = \tsubdir1  has one '\t', level 1, item = '\\subdir1'   st=['dir', '\\subdir1']  sum = 3+9
 item3 = \tsubdir2  has one '\t', level 1, item = '\\subdir2' st.len=2>1 delete  '\\subdir1', 
         sum=3 st=['dir', '\\subdir2']  sum = 3+9
 item4= \t\tfile.ext, level=2 item = '\\file.ext' st=['dir', '\\subdir2', '\\file.txt']  sum = 3+9+10
 
 e.g:
 dir
    subdir1
        file1.ext
        subsubdir1
    subsubdir1
        subsubdir2
            file2.ext
st push 'dir' first, then push 'subdir1', 'file1.ext'  since it is a file, we get the path length
since st.length=3 > 2 pop 'file1.txt', push 'subsubdir1'
since 'subsubdir1' has level=1 st=3 st.pop twice till only have 'dir', then push 'subsubdir1', st= ['dir', 'subsubdir1']
continue push 'subsubdir2', 'file2.txt', since file2.txt is a file, get path length
 */
var lengthLongestPath = function(input) {
    var st = [], ans = 0, sum = 0, level, deleted;
    for(var item of input.split('\n')) {
        level = getLevel(item);
        item = item.lastIndexOf('\t') > -1 ? '\\'+item.substring(item.lastIndexOf('\t')+1) : item;
        while(st.length > level) {
            deleted = st.pop();
            sum -= deleted;
        }
        st.push(item.length);
        sum += item.length;
        if(item.indexOf('.') > -1) {
            ans = Math.max(ans, sum);
        }
    }
    return ans;
};

var getLevel = function(str) {
    return (str.match(/\t/g) || []).length;
};