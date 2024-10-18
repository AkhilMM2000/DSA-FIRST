class Doublelist{
 constructor(value){
    this.value=value
    this.next=null
    this.prev=null

 }

}

class Makelist{

    constructor(){
        this.head=null
        this.tail=null
    }
  
    addfirst(value){
        const node=new Doublelist(value)
      if(!this.head){
        this.head=node
        this.tail=node
      }else{
        this.head.prev=node
      node.next=this.head
       this.head=node
      
      }

    }
    print(){
let cur=this.head
let value=''
while(cur){
    value+=cur.value+'<=>'
    cur=cur.next
}
console.log(value+null);


    }
 reverse(){     //13 35 31
let temp=null
let cur=this.head
while(cur){
   temp=cur.prev
   cur.prev=cur.next
   cur.next=temp
   cur=cur.prev
}
this.head=temp.prev
 }


}
const list=new Makelist()
list.addfirst(13)
list.addfirst(35)
list.addfirst(31)

list.print()
list.reverse()
list.print()