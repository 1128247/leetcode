import { TreeNode } from "./TreeNode";


function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  return dfs([], root);
};

function dfs(arr: Array<number>, root: TreeNode | null) {
  if (root === null)
    return arr;
  arr.push(root.val);
  dfs(arr, root.left);
  dfs(arr, root.right);
  return arr;
}