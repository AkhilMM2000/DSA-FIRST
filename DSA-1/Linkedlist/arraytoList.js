class linkedlist{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class makeList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
        
    }
    getsize(){
        return this.size
    }
    print(){
        if(this.size==0){
            console.log("empty list")
        }
        let current=this.head
        let val=''
        while(current){
            val+=current.value+'=> '
            current=current.next
        }
        console.log(val.trim())
    }

    Arraylist(arr){
const node=new linkedlist(arr[0])
if(arr.length==0){
    return null
}
this.head=node
this.tail=node
this.size++
for(let i=1;i<arr.length;i++){
    const node=new linkedlist(arr[i])
this.tail.next=node
this.tail=node
this.size++
}

    }
   
   
    
}
const list=new makeList()
let arr=[13,21,221,2,3]
list. Arraylist(arr)

console.log(list.getsize())
list.print()