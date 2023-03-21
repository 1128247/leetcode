function tribonacci(n: number): number {
  //边界处理
  if(n === 0){
    return n;
  }else if(n === 1 || n === 2){
    return 1;
  }else {
    //初始化状态
    let prev = 0;
    let curr = 1;
    let next = 1;
    //状态转移
    for(let i = 3; i <= n; i++){
      const result = prev + curr + next;
      prev = curr;
      curr = next;
      next = result;
    }
    //确定状态
    return next;
  }
};

tribonacci(25);