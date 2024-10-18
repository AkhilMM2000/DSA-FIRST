function fibano(n){
let F0=0
let F1=1
let fib=F0+''+F1+' '
for(let i=2;i<=n;i++){
let next=F0+F1
fib+=next+' '
F0=F1
F1=next
}
return fib

}

console.log(fibano(5));
