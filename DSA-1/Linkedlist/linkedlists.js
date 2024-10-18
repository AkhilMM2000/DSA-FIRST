class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }

    }

    print() {
        let current = this.head;
        let list = "";
        while (current) {
            list += current.data + " -> ";
            current = current.next;
        }
        console.log(list + "null");
    }


    removeduplicate() {
        let current = this.head
        while (current) {
            let runner = current
            while (runner.next) {
                if (current.data == runner.next.data) {
           runner.next=runner.next.next
                } else {

                    runner = runner.next

                }



            }


            current = current.next
        }


    }
    
remoemid(){
    let slow=this.head
    let fast=this.head
    while(fast.next){
        fast=fast.next.next
        slow=slow.next
    }       
    slow.data=slow.next.data
    slow.next=slow.next.next
}

reverse(){
    let current=this.head
    let prev=null
    let next;
while(current){
next=current.next
current.next=prev
prev=current
current=next
}
this.head=prev


}

Makecycle(){

if(!this.head)return null
let last=this.head
let current=this.head
while(current.next){
    current=current.next
}

current.next=last.next
}

CheckCylic(){
let slow=this.head
let fast=this.head

while(fast.next){
    slow=slow.next
  fast=fast.next.next
    if(slow===fast){
        return true
    }
}

return false
}
findnode(k){
   if(!this.head) return null
    let slow=this.head
    let fast=this.head
   for(let i=0;i<k;i++){
        fast=fast.next
   }

   while(fast.next){
    fast=fast.next
    slow=slow.next
   }
return slow.next.data
}
 
palindromecheck(){

let string1=''
let string2=''
let cur=this.head
while(cur){
    string1=string1+cur.data
    string2=cur.data+string2
    cur=cur.next

}

return string1===string2
}
sortedduplicate(){
let cur=this.head
while(cur.next){
    if(cur.data==cur.next.data){
        cur.next=cur.next.next
    }else{
        cur=cur.next
    }
}

}



}

let list = new LinkedList();
list.add(1);
list.add(1);
list.add(1);

list.add(2);
list.add(3);

list.add(4);

list.add(5);

list.add(5);
list.print();

list.sortedduplicate()

list.print();
