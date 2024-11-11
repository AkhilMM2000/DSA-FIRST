class Queue{
    constructor(){
        this.item={}
        this.rear=0
       this.front=0
      
    }

    enqueue(element){
         this.item[this.rear]=element
         this.rear++
    }
  dequeue(){
    const item=this.item[this.front]
      delete this.item[this.front]
      this.front++
      return item
  }

  Isempty(){
    return this.rear-this.front===0
  }

  peek(){
    return this.item[this.front]
  }

  size(){
    return this.rear-this.front
  }
  print(){
    console.log(this.item);
    
  }

}
const queue=new Queue()
queue.enqueue(13)
queue.enqueue(3)
queue.enqueue(5)
queue.enqueue(7)
queue.dequeue()
queue.print() 