class heapSort {
  constructor(array) {
    this.array = array;
  }

  tparentindex(i) {
    return Math.floor((i - 1) / 2);
  }
  getleftchild(i) {
    return 2 * i + 1;
  }
  getrightchild(i) {
    return 2 * i + 2;
  }
  buildMaxheap() {
    let n = this.array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.maxheapfy(i, n);
    }
  }
  maxheapfy(i, n) {
    let largest = i;
    let leftchild = this.getleftchild(i);
    let rightchild = this.getrightchild(i);
    if (leftchild < n && this.array[leftchild] > this.array[largest])
      largest = leftchild;
    if (rightchild < n && this.array[rightchild] > this.array[largest]) {
      largest = rightchild;
    }
    if (largest !== i) {
      [this.array[i], this.array[largest]] = [
        this.array[largest],
        this.array[i],
      ];
      this.maxheapfy(largest, n);
    }

  }
sort(){
    this.buildMaxheap()
    for(let i=this.array.length-1;i>=0;i--){
        [this.array[0],this.array[i]]=[this.array[i],this.array[0]]
        this.maxheapfy(0,i)
    }
    return this.array
}


}
let ar = [30,28,18,120,17];
const max = new heapSort(ar);


console.log(max.sort());


