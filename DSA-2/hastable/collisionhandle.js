class HashTable{
    constructor(size){
this.table=new Array(size)
this.size=size
    }

  hash(key){
   let value=0
   for(let i=0;i<key.length;i++){
    value+=key.charCodeAt(i)
   }
return value%this.size
  }

set(key,value){
    const index=this.hash(key)
  
    while(  this.table[index]!==undefined){
        index=(index+1)%this.size
    }

    this.table[index]={key:value}
}
get(key){
    const index=this.hash(key)
    return this.table[index]
}
remove(key){
    const index=this.hash(key)
if(this.table[index]!==undefined){
    this.table[index]=undefined
}else{
    console.log('key not found');
    
}
 
}
display(){

    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i+' : '+this.table[i]);
            
        }
    }
  
    
}

}
  const table=new HashTable(31)
  table.set('apo',98)
table.set('poa',54)
  table.display()