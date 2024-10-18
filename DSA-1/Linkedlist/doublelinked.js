
// https://www.programiz.com/online-compiler/9lO7hUlTHXeN7
class doublelinkedList{
    constructor(value){
        this.value=value
       this.prev=null 
        this.next=null
  
    }
}
class linkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
  
    getsize(){
        return this.size
    }
    print(){
       
        let data=this.head
         let val="";
        while(data){
            val+=`${data.value} `
            data=data.next
        }
        console.log(val)
    }


      addEnd(data){
        const node=new doublelinkedList(data)
        if(this.size==0){
        this.head=node
        this.tail=node

        }

       this.tail.next=node
       node.prev=this.tail
       this.tail=node
        this.size++
        
    }
    
    addFirst(data){
    const node=new doublelinkedList(data)
        if(this.size==0){
              this.head=node
        this.tail=node
        }
        node.next=this.head
        this.head.prev=node
        this.head=node
        this.size++
    
    }


    removeFirst(){
        if(this.size==0){
            return null
        }
        if(this.size==1){
            this.head=null
            this.tail=null
        }
           this.head=this.head.next
          this.head.prev=null
      
       this.size--
    }

    removeEnd(){
        if(this.size==0){
            return null
        }
        if(this.size==1){
            this.head=null
            this.tail=null
        }
        this.tail=this.tail.prev
        this.tail.next=null
        
    }

     reverse(){
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
const list= new linkedList()
list.addEnd(23)
list.addEnd(233)
list.addEnd(283)
list.addEnd(243)
list.addFirst(12)
list.addEnd(33)

list.addFirst(121)
list.removeFirst()

console.log(list.getsize())
list.print()
list.removeEnd()
list.print()