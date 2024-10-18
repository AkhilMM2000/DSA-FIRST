// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// https://www.programiz.com/online-compiler/1RZUx2i89Cg1s
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
    
}
class Linkedlist{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
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

                             //prepened method
                             prepend(value){
                                const node=new Node(value)
                                if(this.isEmpty()){
                                    this.head=node
                                    this.tail=node
                                }else{
                                    node.next=this.head
                                    this.head=node
                                }
                                this.size++
                            }


              //appened the value  

appened(value){
    const node=new Node(value)
    if(this.isEmpty()){
        this.head=node
        this.tail=node
    }
    else{
       this.tail.next=node
       this.tail=node
    }

this.size++
}
removefirst(){
    if(this.size==0){
        return null
    }
    const removeelem=this.head.value
    this.head=this.head.next
    return 
}

insert(value,index){
     const node=new Node(value)
    if(index<0||this.size<=index){
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
    let removednode=""
    if(index<0||index>=this.size){
        return "imposible to remove"
    }
    if(index==0){
        this.head=this.head.next
    }else{
        let cur=this.head
    for(let i=0;i<index-1;i++){
        cur=cur.next
    }
    removednode=cur.next
    cur.next= removednode.next
    }
    
    this.size--
    
}

removeLastElm() {
    // Case 1: If the list is empty
    if (this.size === 0) {
        return null; // Nothing to remove
    }
    
    // Case 2: If there's only one node
    if (this.size === 1) {
        const value = this.head.value;  // Save the value of the head
        this.head = null;  // Remove the only node
        this.tail = null;  // Remove the tail
        this.size--;  // Decrease size
      // Return the removed value
    }

    // Case 3: If there are multiple nodes
    let current = this.head;
    while (current.next !== this.tail) {
        current = current.next;  // Find the second-to-last node
    }

    const value = this.tail.value;  // Save the value of the tail (the last node)
    current.next = null;  // Remove the last node
    this.tail = current;  // Update the tail to the second-to-last node
    this.size--;  // Decrease size
    return value;  // Return the removed value
}


removemidle(){
    let node=this.head
 let cur;
    for(let i=0;i<(this.size/2);i++){
        node=node.next
    }
   cur=node.next
   node.next=cur.next
}
removeOdd() {
        while (this.head !== null && this.head.value % 2 !== 0) {
            this.head = this.head.next; // Removing odd head nodes
        }

        let current = this.head;

        while  (current.next !== null) {
            if (current.next.value% 2 !== 0) {
                current.next = current.next.next; 
            } else {
                current = current.next;
            }
        }
    }
   search(value){
    let node=this.head
    while(node){
        if(node.value==value){
           return i 
        } 
            node=node.next
        
}
  return -1  
} 
reverse(){
    let pre=null
    let current=this.head
    let next=null
    while(current!==null){
        next=current.next
        current.next=pre
        pre=current
        current=next
    }
  this.head=  pre
    
}

}
const list=new Linkedlist()
list.prepend(21)
list.prepend(9)
list.appened(182)
list.appened(184)
list.appened(13)
list.appened(158)
// list.reverse()
// list.appened(158)
// list.removeOdd()
// console.log(list.search())
list.appened(1)

list.prepend(11)
// list.removelastelm()
list.insert(1333,5)
list.removemidle()
// list.removeLastElm() 
// list.removeLastElm() 
// list.removemidle()
console.log(list.getSize())
list.print()

