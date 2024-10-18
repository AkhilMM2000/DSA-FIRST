function fact(n){
let fact=1
for(let i=2;i<=n;i++){
    fact*=i
}
return fact
}
console.log(fact(3));
function recurfact(n){
    if(n<0){
        return 1
    }
    return n*recurfact(n-1)
}
lo