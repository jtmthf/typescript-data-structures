import { SinglyLinkedList, SinglyLinkedListNode } from '../singly-linked-list';

describe('LinkedList', () => {
  it('create empty list', () => {
    const list = new SinglyLinkedList();

    expect(list.head).toBeUndefined();
  });

  it('create nodes', () => {
    const node1 = new SinglyLinkedListNode(1);
    const node2 = new SinglyLinkedListNode(2);
    const node3 = new SinglyLinkedListNode(3);

    expect(node1.data).toBe(1);
    expect(node1.next).toBeUndefined();

    expect(node2.data).toBe(2);
    expect(node2.next).toBeUndefined();

    expect(node3.data).toBe(3);
    expect(node3.next).toBeUndefined();
  });

  it('set head', () => {
    const list = new SinglyLinkedList<number>();
    const node = new SinglyLinkedListNode(1);
    list.head = node;

    expect(list.head).toBe(node);
  });

  it('connect nodes', () => {
    const list = new SinglyLinkedList<number>();

    const node1 = new SinglyLinkedListNode(1);
    const node2 = new SinglyLinkedListNode(2);
    const node3 = new SinglyLinkedListNode(3);

    list.head = node1;
    node1.next = node2;
    node2.next = node3;

    expect(node1.next).toBe(node2);
    expect(node2.next).toBe(node3);
    expect(node1.next.next).toBe(node3);
  });
});
