function lengthOfLastWord(s: string): number {
  let count = 0;
  const trim = s.trim();
  for(let i = 0; i < trim.length; i++){
    let c = trim.charAt(i);
    if(c === ' ' && i !== trim.length - 1){
      count = 0;
      continue;
    }else{
      count++;
    }
  }
  return count;
};

console.log(lengthOfLastWord( "   fly me   to   the moon  "));
