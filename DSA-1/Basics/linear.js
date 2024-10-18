function arrayindex(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==val){
            return i
        }
    }
      return -1   
}
let b=[12,32,1,2,]
console.log(arrayindex(b,32))