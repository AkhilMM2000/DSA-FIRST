function DuplicateNumbeer(arr){
if(arr.length==0)return 0
let i=0
 for(j=0;j<arr.length;j++){
     if(arr[i]!==arr[j]){
        i++
        arr[i]=arr[j]
     }

 }

return arr
}

let ai=[ 0, 1, 2, 1, 2, 2 ]

console.log(DuplicateNumbeer(ai));

