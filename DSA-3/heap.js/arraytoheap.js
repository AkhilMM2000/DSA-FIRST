class Maxheapsort {
  constructor(array) {
    this.array = array;
  }

  getParentindex(i) {
    return Math.floor((i - 1) / 2);
  }
  getleftchild(i) {
    return 2 * i + 1;
  }
  getrightchild(i) {
    return 2 * i + 2;
  }

  Buildmaxheap() {
    let n = this.array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(i, n);
    }
  }

  heapify(i, n) {
    let largest = i;
    let leftchild = this.getleftchild(i);
    let rightchild = this.getrightchild(i);
    if (leftchild < n && this.array[largest] < this.array[leftchild]) {
      largest = leftchild;
    }
    if (rightchild < n && this.array[largest] < this.array[rightchild]) {
      largest = rightchild;
    }

    
    if (largest !== i) {
      [this.array[i], this.array[largest]] = [
        this.array[largest],
        this.array[i],
      ];
      this.heapify(largest, n);
    }
  }
}
let arr = [14, 58, 45, 5, 9, 70];
const Maxheap = new Maxheapsort(arr);
Maxheap.Buildmaxheap();
console.log(arr);
