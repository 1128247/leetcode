
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function inorderTraversal(root: TreeNode | null): number[] {
  const arr: Array<number> = [];
  dfs(arr, root!);
  return arr;
};

function dfs(arr: number[], root: TreeNode) {
  if (root === null)
    return;
  dfs(arr, root.left!);
  arr.push(root.val);
  dfs(arr, root.right!);
}


export { TreeNode };