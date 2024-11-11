let arr= [10, 7, 8, 9, 1, 5]
function Quicksort(arr){
    if(arr.length<=2){
        return arr
    }
    let pivot=arr[0]
   let left=[]
   let right=[]
   for(let i=1;i<arr.length;i++){
       if(pivot<arr[i]){
         right.push(arr[i])
       }else{
        left.push(arr[i])
       }
   }

   return [...Quicksort(left),pivot,...Quicksort(right)]
}
console.log(Quicksort(arr));
