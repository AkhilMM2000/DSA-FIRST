function secondlargest(arr){
if(arr.length<2){
    return false
}
let largest=-Infinity
let secondlargest=-Infinity
let thirdlargest=-Infinity
for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
        thirdlargest=secondlargest
secondlargest=largest
        largest=arr[i]
    }else if(arr[i]>secondlargest){
thirdlargest=secondlargest
        secondlargest=arr[i]
    }else if(arr[i]>thirdlargest){
        thirdlargest=arr[i]
    }
}
return largest
}
console.log(secondlargest([122,32,3,2,4,3,2,33,3]));
