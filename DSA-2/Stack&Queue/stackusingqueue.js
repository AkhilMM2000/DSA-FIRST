class stackuseque {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  push(elm) {
    this.queue2.push(elm);
    while (this.queue1.length) {
      this.queue2.push(this.queue1.shift());
    }
    let temp = this.queue2;
    this.queue2 = this.queue1;
    this.queue1 = temp;
  }

  pop() {
    if (this.queue1.length == 0) {
      return null;
    }

    return this.queue1.shift();
  }

  top() {
    return this.queue1[0];
  }
  isempty() {
    return this.queue1.length == 0;
  }

  print() {
    console.log(this.queue1);
  }
}
const q = new stackuseque();
q.push(13);
q.push(14);
q.push(1);
// q.dequeue()
q.print();
