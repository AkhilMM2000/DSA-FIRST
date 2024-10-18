
//it will reverse an existing array make sure not creating a new array
let k=[1,2,3,4,5]
function rotate(arr){
    let last=arr.pop()
    arr.unshift(last)
    return  arr
}
// console.log(rotate(k));
//with out using methods ................below
function Arrayrotate(arr){
  let length=arr.length-1
let last=arr[length]
  if(length>0){

     while (length>0) {
        
      arr[length]=arr[length-1]
      length--

     }

arr[0]=last

  }
  return arr

}
console.log(Arrayrotate([1,2,3,4,5]));
