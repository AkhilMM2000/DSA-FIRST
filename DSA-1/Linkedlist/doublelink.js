class DoubleList {
    constructor(value) {
      this.value = value;
      this.next = null;  
      this.prev = null;  
    }
  }
  
  class MakeList {
    constructor() {
      this.head = null;  
    }
  
  
    print() {
      let val = '';
      let cur = this.head;
      while (cur) {
        val += cur.value + ' <=> '
        cur = cur.next;
      }
      console.log(val + 'null');  
    }
  
   
    appened(value) {
      const node = new DoubleList(value);
      if (!this.head) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;  
      }
    }
  

    addend(value) {
      const node = new DoubleList(value);
      if (!this.head) {
        this.head = node;
        return;
      }
      let cur = this.head;
      while (cur.next) {
        cur = cur.next; 
      }
      cur.next = node;
      node.prev = cur; 
    }
  

    reverse1() {
      let current = this.head;
      let temp = null;
  
    
      while (current) {
        temp = current.prev;
        current.prev = current.next;
        current.next = temp;
        current = current.prev;
      }
      
      if (temp) {
        this.head = temp.prev; 
      }


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
if(temp){
  this.head=temp.prev
}

   }

removefirst(){
   
    this.head=this.head.next
    this.head.prev=null
}

   removevalue(value){
if(this.head.value==value){
  this.head=this.head.next
  this.head.prev=null
}
let cur = this.head;
while(cur&&cur.next){
  if(cur.next.value==value){
    cur.next=cur.next.next
    if(cur.next){
      cur.next.prev=cur
    }
  }
  cur=cur.next
}

   }



    
  }
  
  
  const list = new MakeList();
  list.appened(10);  
  list.addend(20);   
  list.addend(30);   
  list.appened(5);   
  list.addend(344)
  // list.removefirst()
//   list.print(); 
  // list.removevalue(10)
  list.reverse(); 
 
  list.print();
  