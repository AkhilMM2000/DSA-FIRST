
//it will reverse an existing array make sure not creating a new array
function reverseArray(arr){
    let n=arr.length
    for(let i=0;i<Math.floor(n/2);i++){
        let temp=arr[i]
        arr[i]=arr[n-1-i]
        arr[n-1-i]=temp
    }
     return arr  
       
   }
   console.log(reverseArray([1,2,3,4,5]));
   