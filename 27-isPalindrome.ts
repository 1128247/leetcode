function isPalindrome(s: string): boolean {
  //去除所有的空格和乱七八糟的字符
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
  if (str.length === 0) return true;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    let leftStr = str.charAt(left);
    let rightStr = str.charAt(right);
    if (leftStr === rightStr) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
};
//Aman,aplan,acanal:Panama
console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome('aa'));
// console.log(isPalindrome(".a"));
console.log(isPalindrome("ab"));


