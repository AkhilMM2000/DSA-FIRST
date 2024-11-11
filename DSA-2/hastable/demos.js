class hashtable {
  constructor(size) {
    this.table = new Array(size)
    this.size = size;
  }

  hashkey(key) {
    let value = 0;
    for (let i = 0; i < key.length; i++) {
      value += key.charCodeAt(i);
    }
    return value % this.size;
  }
  set(key,value){
    const index=this.hashkey(key)
     const bucket= this.table[index]
     if(!bucket){
        this.table[index]=[[key,value]]
     }else{
        const exist=bucket.find(item=>item[0]==key)
        if(exist){
            exist[1]=value
        }else{
            bucket.push([key,value])
        }
     }

  }
  get(key){
    const index=this.hashkey(key)
    const bucket= this.table[index]
    if(bucket){
        const exist=bucket.find(item=>item[0]==key)
         return exist[1]
    }
    return undefined
  }

  remove(key){
    const index=this.hashkey(key)
    const bucket= this.table[index]
    if(bucket){
        const exist=bucket.find(item=>item[0]==key)
        bucket.splice(bucket.indexOf(exist),1)
    }
  }


display(){
   
    for(let i=0;i<this.table.length;i++){
          if(this.table[i]){
            console.log(this.table[i]);
            
          }
    }
}


}
const table=new hashtable(3)
table.set('aj',883)
table.set('ia',14)
table.set('i',34)
table.set('ai',114)
// table.remove('ia')
table.display()