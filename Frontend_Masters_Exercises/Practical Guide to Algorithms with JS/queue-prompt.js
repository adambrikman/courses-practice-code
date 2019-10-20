/** Class representing a Queue. 
 * @constructor
*/

class Queue {

  constructor() {
    this._storage = {};
    this._length = 0;
  }
  /*
  * Enqueues a new value at the end of the queue
  * @param {*} value the value to enqueue
  */
  enqueue(value) {
    this._storage[this._length] = value;
    this._length++;
  }

  /*
  * Dequeues the value from the beginning of the queue and returns it
  * @return {*} the first and oldest value in the queue
  */
  dequeue() {
    let dequeued = this._storage[0];
    delete this._storage[0];
    this._length--;

    for(let i = 0; i < this._length; i++) {
      this._storage[i] = this._storage[i + 1]
    }

    delete this._storage[this._length]

    return dequeued;
  }
  /*
  * Returns the value at the beginning of the queue without removing it from the queue
  * @return {*} the first and oldest value in the queue
  */
  peek() {
    return this._storage[0];
  }
}

const myQueue = new Queue();
myQueue.enqueue(7);
myQueue.enqueue(9);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.peek();
console.log(myQueue)