function longestPalindrome(s: string): string {

  const n = s.length;

  if (n <= 1) return s;

  let start = 0;
  let end = 0;

  for (let i = 0; i < n; i++) {
    const length1 = centerExpand(s, i, i);
    const length2 = centerExpand(s, i, i + 1);
    const len = Math.max(length1, length2);
    if (len > end - start) {
      const left = i - Math.floor((len - 1) / 2);
      const right = i + Math.floor(len / 2);
      start = left;
      end = right;
    }
  }
  return s.substring(start, end + 1);
};

function centerExpand(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

console.log(longestPalindrome("bb"));