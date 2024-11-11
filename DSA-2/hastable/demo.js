class Hashtable{
    constructor(size){
        this.table=[]
        this.size=size
    }
    
    hashkey(key){
        let value=0
        for(let i=0;i<key.length;i++){
            value+=key.charCodeAt(i)
        }
        return value %this.size
    }
  
     set(key,value){
        const index=this.hashkey(key)
        let bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const existitem=bucket.find(item=>item[0]==key)
            if(existitem){
                existitem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
     }
     get(key){
        const index=this.hashkey(key)
        let bucket=this.table[index]
        if(bucket){
            const existitem=bucket.find(item=>item[0]==key)
            return existitem[1]
        }
        return undefined
     }
  
     remove(key){
        const index=this.hashkey(key)
        let bucket=this.table[index]
        const existitem=bucket.find(item=>item[0]==key)
        if(existitem){
            // bucket.splice(bucket.indexOf(existitem),1)
            console.log(bucket.indexOf(existitem));
            console.log(this.table);
            
            console.log(existitem);
            
            
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
const table=new Hashtable(3)
table.set('aj',883)
table.set('ia',14)
table.set('i',34)
table.set('ai',114)
table.remove('ia')

