import { ListNode } from "./Node";

function isPalindrome(head: ListNode | null): boolean {
  let data: Array<number> = [];

  let current = head;
  while (current) {
    data.push(current.val);
    current = current.next;
  }
  current = head;
  while (data.length !== 0) {
    if (data.pop() !== current?.val) return false;
    current = current?.next!;
  }
  return true;
};

console.log(isPalindrome(new ListNode(1, new ListNode(2, new ListNode(2, new ListNode(2))))));
