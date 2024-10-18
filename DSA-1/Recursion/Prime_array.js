

function Checkprime(n){
  if(n<2){
    return false
  }
 for(let i=2;i*i<=n;i++){
         if(n%i==0){
            return false
         }
 }

return true

}

function Primenum(n){
  if(n<2){
    return []
  }
 let number=Primenum(n-1)
 if(Checkprime(n)){
    number.push(n)
 }

 return number
}
console.log(Primenum(15));
