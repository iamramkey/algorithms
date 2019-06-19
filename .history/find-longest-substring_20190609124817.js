function findLongestSubstring(str){
  // add whatever parameters you deem necessary - good luck!
  if(str.length < 1) return 0;
  var a = '';
  var max = '';
  var left = 0;
  var right = 0;
  while(left < str.length){
    if(a.indexOf(str[right]) === -1){   
      a += str[right];
      right++;
      if(max.length === 0){
        max = a;
      }else if(max.length < a.length){
        max = a;
      }
    }else{
      a = '';
      right = ++left;
    }
    if(right === str.length){
      right = ++left;
    }
  }
  return max.length;
}



findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6