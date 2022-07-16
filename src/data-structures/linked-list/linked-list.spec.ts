import { LinkedList, LinkedListNode, ListNode } from "./linked-list";

describe("Linked List", () => {
  test("Should return correct head", () => {
    const node1 = new LinkedListNode(5);
    const node2 = new LinkedListNode(20);

    node1.next = node2;

    const list = new LinkedList(node1);

    expect(list.head?.data).toBe(node1.data);
  });

  test("Should return correct size", () => {
    const node1 = new LinkedListNode(5);
    const node2 = new LinkedListNode(20);

    node1.next = node2;

    const list = new LinkedList(node1);

    expect(list.size).toBe(2);
  });
});
