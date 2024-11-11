
function SelectSort(arr){
let n=arr.length
for(let i=0;i<n;i++){
    let min=i
    for(let j=i+1;j<n;j++){
          if(arr[min]>arr[j]){
            min=j
          }
    }
    if(min!==i){
    let temp=arr[i]
    arr[i]=arr[min]
    arr[min]=temp
    }
}
  return arr
}
let arr=[3,2,5,4,7,-3,6]
console.log(SelectSort(arr));
// //output [
//   -3, 2, 3, 4,
//   6, 5, 7
// ]