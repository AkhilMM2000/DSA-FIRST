let arr=[12,32,21,2,3,4,3,2]
function sum(arr){
if(arr.length==0){
   return 0
}
return arr[0]+sum(arr.slice(1))
}
console.log(sum(arr));

function string(str){
    if(str.length==1){
        return str[0]
    }
    return str[0]+string(str.slice(1))
}
let n=[1,2,3,2,3,2]
console.log(string(n));

