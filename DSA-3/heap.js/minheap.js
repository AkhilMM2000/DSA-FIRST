class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex] > this.heap[index]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);
    return min;
  }

  bubbleDown(index) {
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let smallestChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallestChildIndex]
      ) {
        smallestChildIndex = rightChildIndex;
      }

      if (this.heap[index] > this.heap[smallestChildIndex]) {
        [this.heap[index], this.heap[smallestChildIndex]] = [
          this.heap[smallestChildIndex],
          this.heap[index],
        ];
        index = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }
  print(){
    console.log(this.heap);
    
  }
}
const mh= new MinHeap();
let ar=[8,83,4,31,23]
mh.insert(8);
mh.insert(15);

mh.insert(13);
mh.insert(16);
mh.insert(17);
mh.insert(14);
mh.extractMin()
mh.print()
