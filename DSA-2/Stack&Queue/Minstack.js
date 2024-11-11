class Minstack {
  constructor() {
    this.stack = [];
    this.minstack = [];
  }

  push(elem) {
    this.stack.push(elem);
    if (this.minstack.length == 0 || elem <= this.getMin()) {
      this.minstack.push(elem);
    }
  }

  pop() {
    const poped = this.stack.pop();
    if (poped == this.getMin()) {
      this.minstack.pop();
    }
  }

  getMin() {
    return this.minstack[this.minstack.length - 1];
  }
  print() {
    this.stack.forEach((elem, index) => {
      console.log(`${index + 1}:${elem}`);
    });
  }
}
const min = new Minstack();
min.push(25);
min.push(3);
min.push(15);
min.push(55);
min.push(15);
// min.pop()
min.print();
console.log(min.getMin());
