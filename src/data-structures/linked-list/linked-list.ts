export type ListNode = {
  data: any;
  next: ListNode | null;

  addNext(nextNode: ListNode | null): void;
};

export class LinkedListNode implements ListNode {
  data: any;
  next: ListNode | null = null;

  constructor(data: any, next: ListNode | null = null) {
    this.data = data;
    this.next = next;
  }

  addNext(nextNode: ListNode | null): void {
    this.next = nextNode;
  }
}

export class LinkedList {
  head: ListNode | null = null;

  constructor(head: ListNode | null = null) {
    this.head = head;
  }

  get size(): number {
    let counter = 0;
    let pivot = this.head;
    while (pivot) {
      counter += 1;
      pivot = pivot?.next;
    }

    return counter;
  }
}
