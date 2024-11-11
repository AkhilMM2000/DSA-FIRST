class CircularQueue{
    constructor(capacity){
this.item=new Array(capacity)
this.capacity=capacity
this.currentlength=0
this.rear=-1
this.front=-1
    }

isFull(){
    return this.currentlength==this.capacity
}
isEmpty(){
    return this.currentlength===0
}

enqueue(element){
   if(!this.isFull()){
    this.rear=(this.rear+1)%this.capacity
    this.item[this.rear]=element
    this.currentlength=this.currentlength+1
    
    if(this.front==-1){
        this.front=this.rear
    }
   }
}
dequeue(){
    if(this.isEmpty()){
        return null
    }
    const item=this.item[this.front]
    this.item[this.front]=null
    this.front=(this.front+1)%this.capacity
this.currentlength-=1
if(this.isEmpty()){
    this.front=-1
    this.rear=-1
}
return item
}

peek(){
    if(!this.isEmpty()){
        return this.item[this.front]
    }
    return null
}
print(){
    if(this.isEmpty()){
        console.log('its empty circular queue');
        
    }
    let i;
    let str=''
    for( i=this.front;i!==this.rear;i=(i+1)%this.capacity){
        str+=this.item[i]+' '
    }
    str+=this.item[i]
    console.log(str);
    
}

}
const circle=new CircularQueue(3)
circle.enqueue(15)
circle.enqueue(35)
circle.dequeue()
circle.print()

