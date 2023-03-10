//转成字符串的方式 
function isPalindrome(x: number): boolean {
  const val = x.toString();
  let n = val.length - 1;
  let i = 0;
  while (n) {
    if (val.charAt(n) === val.charAt(i)) {
      n--;
      i++;
    }else {
      return false;
    }

  }
  return true;
};

