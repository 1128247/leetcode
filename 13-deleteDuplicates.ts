import { ListNode } from "./Node";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head;
  while (current) {

    if (current.val === current.next?.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }

  }

  return head;
};

console.log(deleteDuplicates(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3,  new ListNode(3)))))));


export { };