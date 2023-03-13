function longestCommonPrefix(strs: string[]): string {

  let first = strs[0];
  //获取最小长度字符串
  for(let i = 0; i < strs.length; i++){
    if(strs[i].length < first.length){
      first = strs[i];
    }
  }
  for(let i = 0; i < strs.length; i++){
    const str = strs[i];
    for(let j = 0; j < str.length; j++){
      if(j > first.length)
        break;
      else{
        if(str.charAt(j) !== first[j]){
          first = first.substring(0, j);
        }
      }  
    }
  }
  return first;
};

console.log(longestCommonPrefix(["ab", "a"]));
