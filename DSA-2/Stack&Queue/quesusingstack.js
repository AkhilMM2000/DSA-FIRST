class queueusetack {
  constructor() {
    //10 20 30
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(elm) {
    this.stack1.push(elm);
  }

  dequeue() {
   if(this.stack2.length==0){
      while(this.stack1.length){
        this.stack2.push(this.stack1.pop())
      }
   }
   if(this.stack2.length==0){
    return null
   }
   return this.stack2.pop()
  
  }
   front(){
  if(this.stack2.length==0){
      while(this.stack1.length){
          this.stack2.push(this.stack1.pop())
      }

  }
  return this.stack2[this.stack2.length-1]

}
isempty(){
    return this.stack1.length==0&&this.stack2.length==0
}
print(){
    if(this.stack1.length){
    console.log(this.stack1);
    }else{
        console.log(this.stack2);
        
    }
}

}
const q=new queueusetack()
q.enqueue(14)
q.enqueue(19)
q.enqueue(18)
q.print()
console.log(q.dequeue());
q.print()
console.log(q.dequeue());
q.print()