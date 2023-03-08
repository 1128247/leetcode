//递归
/**
function climbStairs(n: number): number {
  if (n <= 2)
    return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
};
**/
//动态规划
 
function climbStairs(n: number): number {
  //边界处理
  if (n == 0) return n;
  //初始状态
  const dp = [1, 2];
  //状态转移
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  //确定状态
  return dp[n - 1];
};

