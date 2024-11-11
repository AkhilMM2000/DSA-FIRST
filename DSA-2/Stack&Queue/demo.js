

function removevalue(arr,current,index){
    if(index>arr.length-1||index<0){
        return arr
    }
   let targetIndex=arr.length-1-index

     if(current===targetIndex){
        arr.pop()
        return 
     }
     let value=arr.pop()
     removevalue(arr,current+1,index)

     arr.push(value)

     return arr
}



let stack=[8,10,7,9,2]
let tar=4
let result=removevalue(sr)
console.log(stack);
