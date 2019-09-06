class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  
  
  
  
  
  push(value) {
    const node = new Node(value);
    this.length++;
    
    // if no head, create one
    if (!this.head) {
      this.head = node;
    } 
    
    // else, re-point tail.next to new node
    else {
      this.tail.next = node;
    }
    
    // point tail to new node
    this.tail = node;
  }
  
  
  
  
  
  // delete last node in linked list
  pop() {
    return this.delete(this.length-1);
  }
  
  
  
  
  
  
  _find(value, test=this._test) {
    
    // start at the head
    let current = this.head;
    
    /* initialize incrementor, which is
       used for our testIndex function */
    let i = 0;
    
    /* search for requested node as long 
       as current node is not null */
    while(current) {
      if (test(value, current.value, i)) {
        return current;
      }
      current = current.next;
      i++;
    }
    return null;
  }
  
  
  
  
  
  
  _test(a, b) {
    return a == b;
  }
  
  _testIndex(search, __, i) {
    return search === i;
  }
  
  
  
  
  
  
  get(index) {
    // Assign found node to a variable
    const node = this._find(index, this._testIndex);
    
    // if no node found, return null. Else, return found node
    if (!node) return null;
    return node.value;
  }
  
  
  
  
  
  
  delete(index) {
    
    // if the first index is to be deleted
    if (index === 0) {
      const head = this.head;
      
      // if head is not null, point head to the next node
      if (head) {        
        this.head = head.next;
      }

      // if head is null, both tail and head are null
      else {
        this.tail = this.head = null;
      }
      
      this.length--;
      return head.value;
    }
    
    /* else, an index other than 0 is to be deleted. 
    Find the node before it: */
    const node = this._find(index-1, this._testIndex);
    
    // Node we'll end up deleting
    const excise = node.next;
    
    // If node.next is null, return null
    if (!excise) {
      return null
    };
    
    // node.next gets excise's next value (skipping excise)
    node.next = excise.next;
    
    /* If we are at second-to-last value of 
       the linkedList keep track of the tail */
    if(node.next && !node.next.next) {
      this.tail = node.next;
    }
    
    this.length--;
    return excise.value;
  }
}

// unit tests
// do not modify the below code
describe('LinkedList', function() {
  const range = length => Array.apply(null, {length: length}).map(Number.call, Number);
  const abcRange = length => range(length).map( num => String.fromCharCode( 97 + num ) );
  let list;
  
  beforeEach( () => {
    list = new LinkedList();
  })
  
  it('constructor', () => {
    expect(list).toEqual(jasmine.any(LinkedList));
  });
  
  it('push', () => {
    abcRange(26).map( character => list.push(character) );
    expect(list.length).toEqual(26);
  });
  
  it('pop', () => {
    abcRange(13).map( character => list.push(character) );
    expect(list.length).toEqual(13);
    range(10).map( () => list.pop() );
    expect(list.length).toEqual(3);
    expect(list.pop()).toEqual('c');
  });
  
  it('get', () => {
    list.push('first');
    expect(list.get(0)).toEqual('first');
    list.push('second');
    expect(list.get(1)).toEqual('second');
    expect(list.get(0)).toEqual('first');
    abcRange(26).map( character => list.push(character));
    expect(list.get(27)).toEqual('z');
    expect(list.get(0)).toEqual('first');
    expect(list.get(9)).toEqual('h');
    list.pop();
    expect(list.get(list.length-1)).toEqual('y');
  });
  
  it('delete', () => {
    abcRange(26).map( character => list.push(character) );
    list.delete(13);
    expect(list.length).toEqual(25);
    expect(list.get(12)).toEqual('m');
    expect(list.get(13)).toEqual('o');
    list.delete(0);
    expect(list.length).toEqual(24);
    expect(list.get(0)).toEqual('b');
  });
  
});