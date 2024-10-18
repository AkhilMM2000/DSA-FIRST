//https://www.programiz.com/online-compiler/7Q11DYcNJjEOG
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
    
}
//if you dont have the size in your hand u can calculate it

class Linkedlist{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    print(){
if(this.isEmpty()){
    console.log("list is empty");
    
}
else{
let current=this.head
let list=''
while(current){
    list=list+current.value+' '
    current=current.next
}
console.log(list);

}
    }
appened(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
    }
    else{
        let pre=this.head
        while(pre.next!=null){
            pre=pre.next
        }
        pre.next=node
    }

this.size++

}
insert(value,index){
    const node=new Node(value)
   if(index<0||this.size<index){
       const msg="insert can not be possible"
       return msg
   }
   if(index===0){
       this.prepend(value)
   }
   else{
  
   let cur=this.head
   for(let i=0;i<index-1;i++){
       cur=cur.next
   }
    node.next=cur.next
   cur.next=node
    this.size++
   }
 
}

remove(index){
    if(index<0||index<=this.size){
        return "cannot possible to remove"
    }
    if(index==0){
        this.head=this.head.next
    }
     else{
        let removenode;
        let cur=this.head
  for(let i=0;i<index-1;i++){
    cur=cur.next
  
}
removenode=cur.next
cur.next=removenode.next

     }

  
}

search(value){
    let node=this.head
    for(let i=0;i<this.size;i++){
if(node.value===value){
    return i
}
node=node.next
    }
    return -1

}
removeOdd(){
while(this.head!==null&&this.head.value%2!==0){
    this.head=this.head.next
}
let current=this.head
while(current.next!==null){
if(current.next.value%2!==0){
    current.next=current.next.next
}
current=current.next
}

}
nodereverse(){
let next;
let cur=this.head
let prev=null
while(cur){
  next=cur.next
  cur.next=prev
  prev=cur
  cur=next
}
this.head=prev

}



}
const list=new Linkedlist()
list.prepend(13)
list.prepend(123)
list.appened(14)
list.appened(17)
list.appened(18)
console.log(list.getSize())
list.print();
console.log(list.search(1993));
// // list.removeOdd()
// // 
// list.remove()
list.nodereverse()
list.print();


