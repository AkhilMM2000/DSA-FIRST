let arr=[13,2,1,44,32,5,4]
for(let i=0;i<arr.length;i++){
 for(let j=i+1;j<arr.length-1;j++){
    if(arr[i]>arr[j]){
        let temp=arr[j]
        arr[j]=arr[i]
        arr[i]=temp
    }
 }
 
}
console.log(arr);
