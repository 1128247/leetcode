function generate(numRows: number): number[][] {
  //边界处理
  if (numRows === 1) {
    return [[1]];
  }
  //初始化状态
  const arr: Array<Array<number>> = [[1], [1, 1]];
  //状态转移方程
  for (let i = 2; i < numRows; i++) {
    // arr[i] = [arr[i - 1][0], arr[i - 1][0] + arr[i - 1][1], arr[i - 1][1]];
    arr[i] = [];
    //确定状态
    for(let j = 0; j <= i; j++){
      let left = arr[i -1][j - 1] ?? 0;
      let right = arr[i - 1][j] ?? 0;
      arr[i].push(left + right);
    }
  }
  return arr;
};

generate(5);