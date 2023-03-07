function twoSum(nums: number[], target: number): number[] {
  const m = new Map();
  for(let i = 0; i < nums.length; i++){
      const v = target - nums[i];
      if(m.has(v)){
          return [m.get(v), i];
      }else{
          m.set(nums[i], i);
      }
  }
  return [];
};