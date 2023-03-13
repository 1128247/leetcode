import { ListNode } from "./Node";

function reverseList(head: ListNode | null): ListNode | null {
  //前节点
  let prev:ListNode|null = null;
  //当前节点
  let current = head;
  while (current) {
    //下一个节点，用于后移节点
    let next = current.next;
    //将当前节点的下一个节点置为上一个节点
    current.next = prev;
    //上一个节点指针向后移
    prev = current;
    //当前节点指针向后移
    current = next;
  }
  return prev;
};

reverseList(new ListNode(1, new ListNode(2, new ListNode(3))));
export {};