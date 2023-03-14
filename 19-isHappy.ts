function isHappy(n: number): boolean {
  const data = new Set();

  //求出每一位的平方根的和
  const getSum = (v: number): number => {
    const str = Number(v).toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      const v = Number(str.charAt(i));
      sum += Math.pow(v, 2);
    }
    return sum;
  }
  let val = n;
  while (!data.has(val)) {
    if (val === 1) return true;
    data.add(val);
    val = getSum(val);
  }
  return false;
}

console.log(isHappy(2));