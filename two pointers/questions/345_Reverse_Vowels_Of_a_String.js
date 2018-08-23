var reverseVowels = function(s) {
    const list = ['a', 'e', 'i', 'o','u', 'A', 'E', 'I', 'O','U'];
    var i=0, j = s.length -1;
    var arr = s.split('');
    
    while(i<j) {
        if(list.includes(arr[i]) && list.includes(arr[j])) {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        else if(list.includes(arr[i])) {
            j--;
        }
        else {
            i++;
        }
    }
   return arr.join('');
};
