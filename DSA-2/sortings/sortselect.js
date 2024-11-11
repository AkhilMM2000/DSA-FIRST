let arr= ["apple", "banana", "grape", "kiwi", "orange"]//sort it using selection sort

function selection(arr){
    let n=arr.length
    for(let i=0;i<n;i++){
       let min=i
     for(let j=i+1;j<n;j++){
        if(arr[min]>arr[j]){
            min=j
        }
     }
     
 [arr[i],arr[min]]=[arr[min],arr[i]]
    }
return arr
}
console.log(selection(arr));
