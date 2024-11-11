class stack{
    constructor(){
        this.stack=[]
    }

    push(element){
        this.stack.push(element)
    }
    pop(){
        if(this.isempty()){
            throw new Error("its empty");
            
        }
        this.stack.pop()
    }
   isempty(){
    return this.size()===0
   }
   size(){
    return this.stack.length
   }
    peek(){
        if(this.isempty()){
            return 'its empty '
        }
        return this.stack[this.size()-1]
    }
    print(){
       console.log('stack values');
       this.stack.forEach((elem,index)=>{
        console.log(`${index+1}:${elem}`)})
    
    
    }
     
    
}
const stk=new stack()
stk.push(13)
// stk.push(23)
// stk.push(21)
// stk.push(15)
stk.print()
stk.pop()
try {
    stk.pop()
} catch (error) {
     
}
stk.pop()
stk.print()
console.log(stk.peek());


