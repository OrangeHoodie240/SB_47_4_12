/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const node = new Node(val);
    if(!this.head){
      this.head = node; 
      this.tail = node;
      this.length += 1;  
    }
    else{
      this.tail.next = node; 
      this.tail = node; 
      this.length += 1; 
    }
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const node = new Node(val); 
    if(!this.head){
      this.head = node; 
      this.tail = node; 
      this.length += 1; 
    }
    else{
      node.next = this.head; 
      this.head = node; 
      this.length += 1; 
    }
  }

  /** pop(): return & remove last item. */

  pop() {
    if(!this.tail){
      throw new Error("List empty"); 
    }
    
    const val = this.tail.val; 
    if(this.head === this.tail){
      this.head = null; 
      this.tail = null; 
    }
    else{
      let node = this.head; 
      while(this.tail != node.next){
        node = node.next; 
      }
      this.tail = node;
      this.tail.next = null;  
    }

    this.length -= 1; 
    return val; 
  }

  /** shift(): return & remove first item. */

  shift() {
    if(!this.head){
      throw new Error('Empty list'); 
    }

    const val = this.head.val; 
    if(this.head === this.tail){
      this.head = null; 
      this.tail = null; 
    }
    else{
      this.head = this.head.next; 
    }

    this.length -= 1; 
    return val; 
  } 

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(!this.head){
      throw new Error("Empty List"); 
    }
    else if(this.length - 1 < idx){
      throw new Error("Invalid index"); 
    }

    if(idx === this.length - 1){
      return this.tail.val; 
    }
    else{
      let node = this.head; 
      for(let i = 0; i <= idx; i++){
        if(idx === i){
          return node.val;
        }
        node = node.next; 
      }
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(!this.head){
      throw new Error('empty list');
    }
    else if(idx > this.length - 1){
      throw new Error("Invalid index");
    }
    
    if(idx === this.length - 1){
      this.tail.val = val; 
    }
    else{
      let node = this.head; 
      for(let i = 0; i <= idx; i++){
        if(i === idx){
          node.val = val;
          break;
        }
        node = node.next; 
      }
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length){
      throw new Error("invalid index"); 
    }
    
    const node = new Node(val);
    if(this.length === 0){
      this.head = node; 
      this.tail = this.head; 
    } 
    else if(idx === this.length){
      this.tail.next = node; 
      this.tail = node; 
    }
    else{
      let current = this.head; 
      let previous = null; 
      for(let i = 0; i <= idx; i++){
        if(i === idx){
          node.next = current; 
          previous.next = node; 
          break;
        }
        previous = current;
        current = current.next;
      }
    }

    this.length += 1; 
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(!this.head){
      throw new Error("Empty list"); 
    }
    else if(idx > this.length - 1){
      throw new Error("Invalid List"); 
    }
    
    let val = null; 
    if(this.length === 1){
      val = this.head.val; 
      this.head = null; 
      this.tail = null; 
    }
    else if(idx === 0){
      val = this.head.val; 
      this.head = this.head.next;       
    }
    else{
      let current = this.head.next; 
      let previous = this.head; 
      for(let i = 1; i <= idx; i++){
        if(i === idx){
          val = current.val; 
          previous = current.next; 
          break;
        }
        previous = current; 
        current = current.next;
      }
    }
    
    this.length -= 1; 
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0){
      return 0;
    }    

    let current = this.head; 
    let total = this.head.val; 
    while(current.next !== null){
      total += current.next.val; 
      current = current.next;
    }
    return total / this.length; 
  }
}

module.exports = LinkedList;
