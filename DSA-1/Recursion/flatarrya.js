//flat an array dont use flat inbuild methods
let array=

function flastarray(array){
   let flat=[] 
   for(let i=0;i<array.length;i++){
  if(Array.isArray(array[i])){
    flat=flat.concat(flastarray(array[i]))
  }
  else{
    flat.push(array[i])
  }
}
 return flat

}
console.log(flastarray(array));
