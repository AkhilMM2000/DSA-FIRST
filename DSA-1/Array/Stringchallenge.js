function fact(n){
if(n==1){
    return n
}
return n*fact(n-1)
}
console.log(fact(5));
function factorial(n,acc=1){
if(n==0) return acc
 return factorial(n-1,n*acc)

}

let arr=[12,3,4,10,4]

function sum(arr){
if(arr.length==0){
    return 0
}
return arr[0]+sum(arr.slice(1))
}
console.log(sum(arr));
function fibinoc(n,a=0,b=1){
  if(n==0)return a
if(n==1) return b
return fibinoc(n-1,b,a+b)
}
console.log(fibinoc(6));
