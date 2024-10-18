function RemoveDuplicate(arr){
for(let i=0;i<arr.length-1;i++){
    if(arr[i]==arr[i+1]){
        arr.splice(i+1,1)
        i--
    }

}
return arr
}
console.log(RemoveDuplicate([1,1,2,2,2,3,3,4,8,8,9,9,55,57,57]));
//CAN YOU DO IT WITHOUT USING ANY INBUILD METHOD IN JS 
