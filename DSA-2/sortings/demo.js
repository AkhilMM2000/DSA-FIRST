let arr = [18, 3, 2, 7, 8];

function selection(arr) {
  let result=[]
 for(let i=0;i<3;i++) {
  let min=i
   for(j=i+1;j<arr.length;j++){
      if(arr[min]<arr[j]){
         min=j
      }
   }

   result.push(arr[min])
   arr[min]=-1
 }


return result
}


console.log(selection(arr));
