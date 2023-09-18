import { Node } from "./Node";

class LinkedList {
  head = null;
  tail = null;
  constructor(head, tail) {
    if (head !== undefined) {
      this.head = head;
    }
    if (tail !== undefined) {
      this.tail = tail;
    }
  }

  get head() {
    return this._head;
  }

  set head(node) {
    this._head = node;
  }

  get tail() {
    return this._tail;
  }

  set tail(node) {
    this._tail = node;
  }

  append(value) {
    let node = new Node(value);
    this.tail.nextNode = node;
    this.tail = node;
  }

  prepend(value) {
    let node = new Node(value, this.head);
    node.nextNode = this.head;
    this.head = node;
  }

  size() {
    if (this.head === null) {
      return 0;
    }

    let node = this.head;
    let size = 0;

    while(node !== null) {
      size++;
      node = node.nextNode;
    }

    return size;
  }

  at(index) {
    if (this.size() === 0) {
      throw new Error('Index not found. LinkedList size is 0.');
    }

    let node = this.head;

    if (index === 0) {
      return this.head;
    }
    
    for (let i = 0; i < index; i += 1) {
      if (node === null) {
        throw new Error('Index not found. Index out of bounds.');
      }
      node = node.nextNode;
    }
    
    return node;
  }

  pop() {
    if (this.size() === 0) {
      throw new Error('Cannot remove last element. LinkedList is size 0.');
    }
    const newTail = this.at(this.size() - 1);
    newTail.nextNode = null;
  }

  contains(value) {
    if (this.size() === 0) {
      throw new Error('Value not found. LinkedList is size 0.');
    }

    let node = this.head;

    while (node !== null) {
      if (node === null) {
        return false;
      }
      if (node.value === value) {
        return true;
      }

      node = node.nextNode;
    }
  }

  find(value) {
    if (this.size() === 0) {
      throw new Error('Value not found. LinkedList is size 0.');
    }

    let node = this.head;

    while (node !== null) {

      if (node.value === value) {
        return node;
      }

      if (node.nextNode === null) {
        return null
      }
      
      node = node.nextNode;
    }
  }

  toString() {
    if (this.size() === 0) {
      console.log('null');
    }

    let node = this.head;
    let result= '';

    while (node !== null) {
      let string = `( ${node.value} ) ->`;
      result = result.concat(' ', string);

      node = node.nextNode;
    }

    result = result.concat(' ', 'null');

    console.log(result);
  }

  insertAt(value, index) {
    if (this.size() === 0) {
      throw new Error('Index not found. LinkedList is size 0.');
    }

    if (index > this.size()) {
      throw new Error('Index out of bounds. Index greater than LinkedList size.');
    }

    let node = at(index);
    let newNode = new Node(value);

    if (index === this.size()) {
      this.append(value);
      return;
    }
    
    if (index === 0) {
      this.head = newNode;
      newNode.nextNode = node;
      return;
    }

    let prev = at(index-1);
    prev.nextNode = newNode;
    newNode.nextNode = node;
  }

  removeAt(index) {
    if (this.size() === 0 ) {
      throw new Error('Index not found. LinkedList is size 0.');
    }

    if (index > this.size()) {
      throw new Error('Index out of bounds. Index greater than LinkedList size.');
    }

    if (index === this.size() - 1) {
      this.pop();
      return;
    }

    if (index === 0) {
      let node = this.head;
      this.head = node.nextNode;
      node.nextNode = null;

      return;
    }

    let prev = at(index-1);
    let node = at(index);
    prev.nextNode = node.nextNode;
    node.nextNode = null;
  }
}