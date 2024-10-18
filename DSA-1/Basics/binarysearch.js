function find(ar,target){
let li=0
let ri=ar.length-1
while(li<=ri){
let middle=Math.floor((li+ri)/2)
if(target==ar[middle]){
    return middle
}
if(target<ar[middle]){
    ri=middle-1
}
else{
    li=middle+1
    
}

}

return -1
}
const ar=[12,33,45,78,98,777]

console.log(find(ar,777));
