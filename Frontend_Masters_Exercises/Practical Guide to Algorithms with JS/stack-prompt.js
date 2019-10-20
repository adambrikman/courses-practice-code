/** Class representing a Stack. */

class Stack {

  constructor() {
    this._storage = {};
    this._i = 0;
  }
  /*
  * Adds a new value at the end of the stack
  * @param {*} value the value to push
  */
  push(value) {
    this._storage[this._i] = value;
    this._i++;
  }

  /*
  * Removes the value at the end of the stack and returns it
  * @return {*} the last and newest value in the stack
  */
  pop() {
    let popped = this._storage[this._i-1];
    delete this._storage[this._i-1]
    this._i--;
    return popped;
  }
  /*
  * Returns the value at the end of the stack without removing it
  * @return {*} the last and newest value in the stack
  */
  peek() {
    return this._storage[this._i-1];
  }
}

const myStack = new Stack();
myStack.push(4);
myStack.push(2);
myStack.pop();
myStack.peek();
// console.log(myStack)