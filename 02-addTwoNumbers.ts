import { ListNode } from "./Node";


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let node1 = l1;
  let node2 = l2;
  const result = new ListNode();
  let current = result;
  let carry = 0;
  //遍历最大次数
  while(node1 || node2){

      const val1 = node1?.val || 0;
      const val2 = node2?.val || 0;
      const sum = val1 + val2 + carry;
      carry = Math.floor(sum / 10);
      
      current.next = new ListNode(Math.floor(sum % 10));
      current = current.next;
      if(node1) node1 = node1.next;
      if(node2) node2 =  node2.next;
  }
  if(carry > 0){
      current.next = new ListNode(carry);
  }
  return result.next;
};

const result = addTwoNumbers(new ListNode(2, new ListNode(4, new ListNode(3))), new ListNode(5, new ListNode(6, new ListNode(4))));
let current = result;
while(current){
  console.log(current.val);
  current = current.next;
  
}

export {};