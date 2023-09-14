class Node {
  
  constructor () {
    this.value = null;
    this.nextNode = null;
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