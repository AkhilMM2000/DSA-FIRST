function fact(n){
    if(n<1){
        return 1
    }
    return n*fact(n-1)
}
console.log(fact(5));

function fibanoci(n){
    if(n<=1){
return n
    }
    return fibanoci(n-1)+fibanoci(n-2)
}

