function romanToInt(s: string): number {
  const map = new Map<string, number>();
  map.set('I', 1);
  map.set('V', 5);
  map.set('X', 10);
  map.set('L', 50);
  map.set('C', 100);
  map.set('D', 500);
  map.set("M", 1000);

  let prev:number = map.get(s.charAt(0))!;
  let result = prev;
  for(let i = 1; i < s.length; i++){
    const value = map.get(s.charAt(i))!;
    if(value > prev){
      //罗马数字不存在负数，减去上一次加上的值
      result += Math.abs(prev - value) - prev;
    }else {
      result += value;
    }
    prev = value;
  }
  return result;
};

console.log(romanToInt("MCMXCIV"));
