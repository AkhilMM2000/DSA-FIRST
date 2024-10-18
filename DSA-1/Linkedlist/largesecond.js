// function largesecond(arr){
//     if(arr.length<2){
//         return false
//     }
// let secondlargest=-Infinity
// let largest=-Infinity
// let thirdlargest=-Infinity
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>largest){
//         thirdlargest=secondlargest
//         secondlargest=largest
//         largest=arr[i]
//     }
//     else if(arr[i]>secondlargest&&arr[i]<largest){
//         thirdlargest=secondlargest
//         secondlargest=arr[i]
//     }else if(arr[i]>thirdlargest&&arr[i]<secondlargest){
// thirdlargest=arr[i]
//     }
// }

// return secondlargest
// }
// let ar=[13,233,3,55,432,4,33,432,33]
// console.log(largesecond(ar));
let arr=[13,33,27,12,32,4,43]
let larges=0
let secondlargest=0
for(i=0;i<arr.length;i++){
    if(arr[i]>larges){
        secondlargest=larges
        larges=arr[i]
    }
    else if(arr[i]>secondlargest&&arr[i]<larges){
       secondlargest=arr[i]
    }
}
console.log(secondlargest);
