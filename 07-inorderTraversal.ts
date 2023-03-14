import { TreeNode } from "./TreeNode";

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