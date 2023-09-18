export class Node {
  
  value = null;
  nextNode = null;

  constructor (value, nextNode) {
    if (value !== undefined) {
      this.value = value;
    }
    if (nextNode !== undefined) {
      this.nextNode = nextNode;
    }
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  get nextNode() {
    return this._nextNode;
  }

  set nextNode(value) {
    this._nextNode = value;
  }
}