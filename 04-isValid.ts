function isValid(s: string): boolean {
  const datas = new Map<string, string>();
  datas.set(')', '(');
  datas.set(']', '[');
  datas.set('}', '{');
  const arr: Array<string> = [];
  for(let c of s){
    if(!datas.has(c)){
      //添加左括号
      arr.push(c);
    }else {
      //右括号的情况需要移除对应的左括号
      const v = datas.get(c);
      //如果栈顶的元素和右括号不匹配直接返回false
      if(v !== arr.pop()){
        return false;
      } 
    }
  }
  return arr.length === 0;
};

console.log(isValid('(]'));
