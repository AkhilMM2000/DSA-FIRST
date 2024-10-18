function fibanoci(n){
if(n<=1){
    return n
}
return fibanoci(n-1)+fibanoci(n-2)
}
console.log(fibanoci(6));
function strback(str){
    if(str==0){
        return str
    }
return strback(str.slice(1))+str[0]
}
console.log(strback('malayalama'));
function fact(n){
    if(n<=1){
        return n
    }
    return n*fact(n-1)
}
console.log(fact(4));
