let arr=[9,[[[12]]],7,[123],[5],[[7]],[[[[43]]]]]



function flatarray(arr){
    let result=[] 
for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){ 
        result=result.concat(flatarray(arr[i])) 
    }else{
        result.push(arr[i])
    }


}
return result

}

console.log(flatarray(arr));
console.log(Math.floor(7/10));