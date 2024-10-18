function fibanoc(n){

if(n<2){
    return n
}
return fibanoc(n-1)+fibanoc(n-2)
}
console.log(fibanoc(12));
