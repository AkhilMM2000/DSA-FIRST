let arr=[12,13,15,17,21,33,35,122]

function binary(arr,target,li,ri){

if(li>ri){
    return -1
}


   let mid=Math.floor((li+ri)/2)
   if(target==arr[mid]){
    return mid
   }
   else if(arr[mid]>target){

 return  binary(arr,target,li,mid-1)
   }else{

return  binary(arr,target,mid+1,ri)
   }

}
console.log(binary(arr,122,0,arr.length-1));
