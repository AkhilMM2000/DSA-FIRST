class Arraymin {
  constructor(arr) {
    this.arr = arr;
  }

  getparent(i) {
    return Math.floor((i - 1) / 2);
  }
  getleft(i) {
    return 2 * i + 1;
  }
  getright(i) {
    return 2 * i + 2;
  }

  buildminheap() {
    const n = this.arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      this.heapify(i, n);
    }
  }
  heapify(i, n) {
    let smallest = i;
    let left = this.getleft(i);
    let right = this.getright(i);

 if(left<n&&this.arr[smallest]>this.arr[left]){
     smallest=left
 }
 if(right<n&&this.arr[smallest]>this.arr[right]){
    smallest=right
}

if(smallest!==i){
   [this.arr[i],this.arr[smallest]]=[this.arr[smallest],this.arr[i]]
   this.heapify(smallest,n)
}

  }
mintomax(){
    this.buildminheap()
  for(let i=this.arr.length-1;i>=0;i--){
    [this.arr[0],this.arr[i]]=[this.arr[i],this.arr[0]]
    this.heapify(0,i)
  }
}

}
const b=[8,7,5,4,3]
const m=new Arraymin(b)
m.mintomax()
console.log(b);
