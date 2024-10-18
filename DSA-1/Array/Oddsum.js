///Recursive sum of odd numbers in an array
let arr=[1,2,5,3,2,5]
function sumodd(arr){
if(arr.length<1){
    return 0
}
let odd=arr[0]%2==0?arr[0]:0
return sumodd(arr.slice(1))+odd
}

console.log(sumodd(arr));

