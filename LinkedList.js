import { Node } from "./Node.js";

export class LinkedList {
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

  append(value) {
    let node = new Node(value, null);

    if (this.size() === 0) {
      this.head = node;
      this.tail = node;
      
      return;
    }

    this.tail.nextNode = node;
    this.tail = node;
  }

  prepend(value) {
    let node = new Node(value);

    if (this.size() === 0) {
      this.head = node;
      this.tail = node;
      node.nextNode = null;

      return;
    }

    node.nextNode = this.head;
    this.head = node;
  }

  at(index) {
    if (this.size() === 0) {
      throw new Error('Index not found. LinkedList size is 0.');
    }

    if (index < 0) {
      throw new Error('Index cannot be a negative number.');
    }

    if (index === 0) {
      return this.head;
    }

    if (index > this.size()-1) {
      throw new Error('Index out of bounds.');
    }
    
    let node = this.head;
    
    for (let i = 0; i < index; i += 1) {
      node = node.nextNode;
    }
    
    return node;
  }

  pop() {
    if (this.size() === 0) {
      throw new Error('Cannot remove last element. LinkedList is size 0.');
    }

    const newTail = this.at(this.size() - 2);

    newTail.nextNode = null;
    this.tail = newTail;
  }

  contains(value) {
    if (this.size() === 0) {
      throw new Error('Value not found. LinkedList is size 0.');
    }

    let node = this.head;

    while (node !== null) {
      if (node.value === value) {
        return true;
      }

      node = node.nextNode;
    }

    return false;
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

      node = node.nextNode;
    }

    return null;
  }

  toString() {
    if (this.size() === 0) {
      console.log('null');
      return;
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
    if (this.size() === 0 && index !== 0) {
      throw new Error('Index not found. LinkedList is size 0.');
    }

    if (index > this.size()) {
      throw new Error('Index out of bounds. Index greater than LinkedList size.');
    }

    if (index < 0) {
      throw new Error('Index cannot be a negative number');
    }
    
    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size()-1) {
      this.append(value);
      return;
    }

    let node = this.at(index);
    let newNode = new Node(value);
    let prev = this.at(index-1);

    prev.nextNode = newNode;
    newNode.nextNode = node;
  }

  removeAt(index) {
    if (this.size() === 0 ) {
      throw new Error('Index not found. LinkedList is size 0.');
    }

    if (index > this.size()-1) {
      throw new Error('Index out of bounds. Index greater than LinkedList size.');
    }

    if (index < 0) {
      throw new Error('Index out of bounds. Index cannot be a negative number.');
    }

    if (index === this.size() - 1) {
      this.pop();
      return;
    }

    if (index === 0) {
      let oldHead = this.head;
      this.head = oldHead.nextNode;
      oldHead.nextNode = null;

      return;
    }

    let prev = this.at(index-1);
    let node = this.at(index);
    
    prev.nextNode = node.nextNode;
    node.nextNode = null;
  }
}