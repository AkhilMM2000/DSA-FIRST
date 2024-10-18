class LinkedList{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class MakeList{
  
constructor(){
    this.head=null
    this.size=0
}

prepened(value){
    const node=new LinkedList(value)
    if(!this.head){
        this.head=node
        this.size++
    }else{
   node.next=this.head
   this.head=node

this.size++
    }


}
print(){
    let cur=this.head
    let values=''
    while(cur){
        values+=cur.value+'=>'
        cur=cur.next
    }


    console.log(values+'null');
    
}

addend(value){
    const node=new LinkedList(value)
if(!this.head){
    this.head=node
    this.size++
}
else{
    let cur=this.head
    while(cur.next){
        cur=cur.next
    }
    cur.next=node
    this.size++
}

}

RemovOdd(){
while(this.head.value%2!==0){
    this.head=this.head.next
}
let cur=this.head
while(cur.next){
    if(cur.next.value%2!==0){
        cur.next=cur.next.next
    }else{
        cur=cur.next
    }

}

}
//13 13 14 15 17
removeduplicate(){
let cur=this.head
while(cur){
let runner=cur
 while(runner.next){
    if(cur.value==runner.next.value){
        runner.next=runner.next.next
    }else{
        runner=runner.next
    }
 }
 cur=cur.next

}


}
oddeven(){
    let cur=this.head
    while(cur){
        if(cur.value%2!==0){
            cur.value=1

        }else{
            cur.value=0
        }
        cur=cur.next
    }
}

deleteFirst(){
    if(!this.head)return false
    this.head=this.head.next
}

deleteLast(){
    if(!this.head)return false
if(!this.head.next){
    this.head=null
    return true
}

  let cur=this.head
  while(cur.next.next){
    cur=cur.next
  }
 cur.next=null

}

reverse(){
    let prev=null
    let next;
    let cur=this.head
    while(cur){
       next=cur.next
       cur.next=prev
       prev=cur
       cur=next
    }
    this.head=prev

}

makeCycle(){
   let slow=this.head
   let fast=this.head
   while(fast&&fast.next){
   slow=slow.next
   fast=fast.next.next
   if(slow==fast){
    return true
   }

   }

}
//11=>19=>13=>14=>13=>11=>21=>null
removemid(){
    let mid=this.head
    let end=this.head
    while(end&&end.next){
        mid=mid.next
        end=end.next.next
    }

    mid.value=mid.next.value
    mid.next=mid.next.next 

}

removelast(value) {
    let cur = this.head;
    let prev = null;
    let last = null;   // To store the last occurrence of the node with the value
    let lastPrev = null; // To store the node before the last occurrence
    
    // Traverse the list to find the last occurrence of the node with the value
    while (cur) {
      if (cur.value === value) {
        last = cur;
        lastPrev = prev; // Update lastPrev to the node before 'last'
      }
      prev = cur;
      cur = cur.next;
    }
lastPrev.next=last.next

}

getsize(){
let head=this.head
let size=0
while(head){

head=head.next
size++
}
return size
}

removedupliset(){
let cur=this.head
const sets=new Set()
let prev;
while(cur){
    if(sets.has(cur.value)){
        prev.next=cur.next
        cur=cur.next
    }else{
        sets.add(cur.value)
        prev=cur
        cur=cur.next
    }
}


}
//11=>19=>13=>14=>13=>11=>21=>null

 dupleremove(){
    let cur=this.head

    while(cur){
        let run=cur
          while(run.next){
         if(cur.value==run.next.value){
            run.next=run.next.next
         }else{
         
            run=run.next
         }
        }

     cur=cur.next

    }
 }

 remove_even(value){
    const node=new LinkedList(value)
   while(this.head.value%2==0){
    this.head=this.head.next
   }
   let cur=this.head

     while(cur.next){
        if(cur.next.value%2==0){
            cur.next=cur.next.next
           
        }else{
            cur=cur.next
        }
    
     }
node.next=this.head
this.head=node

 }
//22=>20=>13=>14=>13=>14=>17=>null
removeLast(value) {
    let cur = this.head;
    let prev = null;
    let last = null;   // To store the last occurrence of the node with the value
    let lastPrev = null; // To store the node before the last occurrence
    
    // Traverse the list to find the last occurrence of the node with the value
    while (cur) {
        if (cur.value === value) {
            last = cur;
            lastPrev = prev; // Update lastPrev to the node before 'last'
        }
        prev = cur;
        cur = cur.next;
    }

    // If last is null, the value was not found, so return
    if (!last) {
        console.log("Value not found.");
        return;
    }

    // If lastPrev is null, it means the last occurrence was at the head
    if (!lastPrev) {
        this.head = last.next; // Remove the head by pointing it to the next node
    } else {
        // Otherwise, remove the last occurrence by skipping over it
        lastPrev.next = last.next;
        console.log('ha');
        
    }
}

lastout(value){
let cur=this.head
let prev=null
let last=null
let lastprev=null
while(cur){
    if(cur.value==value){
       last=cur
       lastprev=prev
    }
    prev=cur
    cur=cur.next
}


if(!last){
    console.log('not found');
    return
}
if(!lastprev){
    this.head=this.head.next
}else{
    lastprev.next=last.next
}

}


}

const list=new MakeList()
list.prepened(14)
list.prepened(13)
list.prepened(20)
list.prepened(22)
list.addend(13)
list.addend(14)
list.addend(17)
list.print()

console.log(list.lastout(22));


list.print()

////13=>19=>13=>14=>31=>31=>=>null


