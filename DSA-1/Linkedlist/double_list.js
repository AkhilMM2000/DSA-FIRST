class DoubleList {

    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }

}

class MakeDouble {

    constructor() {
        this.head = null
        this.tail = null
    }

    addfirst(value) {
        const dnode = new DoubleList(value)
        if (!this.head) {
            this.head = dnode
            this.tail = dnode
           
        }
    else{
        dnode.next = this.head
        this.head.prev = dnode
           this.head=dnode
    }
    }
    print(){
        let cur=this.head
        let str=''
        while(cur){
            str+=cur.value+'<=>'
            cur=cur.next
        }
        console.log(str+'null');
        
    }

printreverse(){
let cur=this.tail
let str=''
 while(cur){
    str+=cur.value+'<=>'
    cur=cur.prev
 }
console.log(str+'null');


}
 
AddEnd(value){
    const dnode = new DoubleList(value)
if(!this.head){
    this.head=dnode
    this.tail=dnode
}else{
this.tail.next=dnode
dnode.prev=this.tail
this.tail=dnode

}

}
removemidnode(){
if(!this.head){
    return false
}
  let cur=this.head
  let slow=this.head
  while(cur&&cur.next){
cur=cur.next.next
slow=slow.next

  }

slow.prev.next=slow.next
slow.next.prev=slow.prev
}
reverse(){
    let cur=this.head
let temp=null

while(cur){
    temp=cur.prev
    cur.prev=cur.next
    cur.next=temp

    cur=cur.prev

}
this.head=temp.prev
}


}

const list=new MakeDouble()
list.addfirst(1)
list.addfirst(3)
list.addfirst(6)
list.addfirst(5)

list.AddEnd(211)
list.print()
console.log(list.removemidnode());

list.print()
list.reverse()
list.print()