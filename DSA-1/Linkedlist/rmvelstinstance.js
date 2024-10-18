class LinkedLists {
  constructor(value) {
    this.value = value
    this.next = null
  }

}

class MakeList {
  constructor() {
    this.head = null
  }
  appened(value) {
    const node = new LinkedLists(value)
    if (this.head == null) {
      this.head = node
    }
    else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }


  }

  print() {
    if (this.head == null) return null
    let current = this.head
    let nodevalues = ''
    while (current) {
      nodevalues+= current.value + '=>'
      current = current.next
    }

 console.log(nodevalues+'null');
 
  }
removelastinstance(value){
let count=0
let current=this.head
while(current){
  count++
  current=current.next
}
let num=0;
let nodenow=this.head
for(let i=1;i<=count;i++){
  if(nodenow.value==value){
    num=i
  }
  nodenow=nodenow.next
}
if(num==0) return false
let change=this.head
for(let i=1;i<num;i++){
   change=change.next
}
change.value=change.next.value
change.next=change.next.next

}
prepned(value){
  const node = new LinkedLists(value)
if(!this.head){
  this.head=node
}
else{
  node.next=this.head
  this.head=node
}
}
size(){
  let count=0
  let current=this.head
  while(current){
    count++
    current=current.next
  }
  return count
}

insert(value,index){
  if(index==0){
    this.prepned(value)
  }
  const node = new LinkedLists(value)
let current=this.head

for(let i=0;i<index-1;i++){
    current=current.next
}
node.next=current.next
current.next=node

}

  removefirst(value) {
    
    if (this.head.value == value) {
      this.head = this.head.next
    }
    else {
      let current = this.head;
      while (current.next) {
        if (current.next.value == value) {
          current.next = current.next.next

        }
        current = current.next
      }
    }

  }

removeadd(value){
  const node = new LinkedLists(value)
  if(this.head.value==value){
  return 
  }
  let current=this.head
  while(current.next){
    if(current.next.value==value){
      current.next=current.next.next
    }
    current=current.next
  }
  node.next=this.head
  this.head=node

}
// deletemiddle(){
// let slow=this.head
// let fast=this.head
//   while(fast.next){
//     slow=slow.next
//     fast=fast.next.next
//   }
//    slow.value=slow.next.value
// slow.next=slow.next.next
// }
reverse(){
let next;
let current=this.head
let  prev=null
while(current){
  next=current.next
  current.next=prev
  prev=current
  current=next
}
this.head=prev

}


}
const nodes=new MakeList()
nodes.appened(13)
nodes.appened(15)
nodes.appened(17)
nodes.appened(13)
nodes.appened(14)
nodes.prepned(113)

nodes.insert(19,2);
console.log(nodes.deletemiddle());

nodes.reverse()
console.log(nodes.size());

nodes.print()