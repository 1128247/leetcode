function lengthOfLongestSubstring(s: string): number {

  const map = new Map<string, number>();
  let maxLength = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    const rightChar = s[i];

    if (map.has(rightChar) && map.get(rightChar)! >= left) {
      left = map.get(rightChar)! + 1;
    }
    map.set(rightChar, i);

    const currentLength = i - left + 1;
    maxLength = Math.max(currentLength, maxLength);
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("dvdf"));