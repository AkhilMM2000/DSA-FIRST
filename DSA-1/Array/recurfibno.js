function fibno(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }

    return fibno(n-1)+fibno(n-2)
}

function fibanocci(n,a=0,b=1){
if(n==0)return a
if(n==1)return b
return factrecur(n-1,b,a+b)
}
console.log(factrecur(5));
function fact(n,b=1){
    if(n<2)return b
    return fact(n-1,n*b)
}
console.log(fact(6));

