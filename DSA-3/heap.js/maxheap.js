class Maxheap {
  constructor() {
    this.heap = [];
  }
  getparentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getleftchild(i) {
    return 2 * i + 1;
  }
  getrightchild(i) {
    return 2 * i + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parent = this.getparentIndex(index);
      if (this.heap[parent] < this.heap[index]) {
        [this.heap[index], this.heap[parent]] = [
          this.heap[parent],
          this.heap[index],
        ];
        index = parent;
      } else {
        break;
      }
    }
  }

  extractmax() {
    if (this.heap.length == 0) return null;
    if (this.heap.length == 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return max;
  }
  bubbleDown(index) {
    while (this.getleftchild(index) < this.heap.length) {
      let largeindex = this.getleftchild(index);
      let rightChildIndex = this.getrightchild(index);
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largeindex]
      ) {
        largeindex = rightChildIndex;
      }
      if (this.heap[index] < this.heap[largeindex]) {
        [this.heap[index], this.heap[largeindex]] = [
          this.heap[largeindex],
          this.heap[index],
        ];
        index = largeindex;
      } else {
        break;
      }
    }
  }

  remove(value) {
    const index = this.heap.indexOf(value);
    if (index == -1) return false;
    [this.heap[index], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[index],
    ];
    this.heap.pop()
    if(index<this.heap.length){
      this.bubbleUp(index)
      this.bubbleDown(index)
    }
    return true
  } 

  print() {
    console.log(this.heap);
  }
}

const max = new Maxheap();

max.insert(55);

max.insert(40);
max.insert(35);
max.insert(15);
max.insert(20);
max.insert(30);
max.print();
max.remove(55)
max.print();
