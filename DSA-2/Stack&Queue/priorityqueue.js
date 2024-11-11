class Element {
    constructor(value, priority) {
      this.value = value;
      this.priority = priority;
    }
  }
  
  class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element with a priority
    enqueue(value, priority) {
      const element = new Element(value, priority);
      let added = false;
  
      // Place the element in the correct position
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].priority > priority) {
          this.items.splice(i, 0, element); // insert at correct position
          added = true;
          break;
        }
      }
      
      // If not added, push to the end
      if (!added) this.items.push(element);
    }
  
    // Method to remove the element with the highest priority
    dequeue() {
      return this.items.shift();
    }
  
    // Method to check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
    print(){
        console.log(this.items);
        
    }
   
  }
  
  // Testing the PriorityQueue
  const pq = new PriorityQueue();
  pq.enqueue("Low-priority task", 3);
  pq.enqueue("High-priority task", 1);
  pq.enqueue("Medium-priority task", 2);
  
  console.log(pq.dequeue().value); // "High-priority task"
  console.log(pq.dequeue().value); // "Medium-priority task"
  console.log(pq.dequeue().value); // "Low-priority task"
  pq.print()