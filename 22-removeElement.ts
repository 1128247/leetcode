// function removeElement(nums: number[], val: number): number {
//   let index: null | number = null;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       for(let j = i; j < nums.length - 1; j++){
//         nums[j] = nums[j + 1];
//       }
//       i--;
//       nums.length--;
//     }
//   }
//   return nums.length;
// };

//双指针
function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (nums[left] === val) {
      nums[left] = nums[right];
      right--;
    } else {
      left++;
    }
  }
  return left;
}

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));