//递归,会有重复计算的问题。
/** 
function fib(n: number): number {
  if(n === 1)
    return n;
  return fib(n -1) + fib(n - 2);
};
*/


//动态规划
function fib(n: number) {
  if (n < 1) {
    return n;
  } else if (n === 2) {
    return 1
  } else {
    let prev = 1;
    let curr = 1;
    for (let i = 2; i < n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  }
}

console.log(fib(4));