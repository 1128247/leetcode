function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0)
    return true;
  
    const map = new Map<string, number>();
  let index = 0;

  for (let i = 0; i < t.length; i++) {

    if (t.charAt(i) === s.charAt(index)) {
      if (map.has(s.charAt(index - 1))) {
        let prevIndex = map.get(s.charAt(index - 1))!;
        if (prevIndex > index)
          return false;
        else {
          map.set(s.charAt(index), index);
          index++;
        }
      } else {
        map.set(s.charAt(index), index);
        index++;
      }
    }

  }
  return index === s.length;
};
console.log(isSubsequence('abc', 'ahbgdc'));

