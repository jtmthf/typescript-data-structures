export class SinglyLinkedList<T> {
  public head?: SinglyLinkedListNode<T>;
}

export class SinglyLinkedListNode<T> {
  public next?: SinglyLinkedListNode<T>;

  constructor(public data: T) {}
}
