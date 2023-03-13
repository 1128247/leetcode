import { ListNode } from "./Node";

function removeElements(head: ListNode | null, val: number): ListNode | null {

  let current = head;
  while (current) {
    if (current.next?.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next
    }
  }

  return head?.val === val ? head.next : head;
};

// removeElements(new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))), 6);
// removeElements(new ListNode(7, new ListNode(7, new ListNode(7 ))), 7);
console.log(removeElements(new ListNode(1, new ListNode(2)), 1));
export { };