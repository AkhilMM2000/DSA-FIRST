let str='apple banana apple orange banana apple'

function count(arr){
const maps=new Map()

for(const val of str.split(' ')){
   if(maps.has(val)){
       maps.set(val,maps.get(val)+1)
   }else{
    maps.set(val,1)
   }
  
}
return maps
}
console.log(count(str));
