let str='sports will be superspecial '
function bigword(str){
let current=''
let largest=''
for(let i=0;i<str.length;i++){
    if(str[i]==' '){
       
        if(current.length>largest.length){
            largest=current
           
        }
current=''
    }
     
    else{
        current+=str[i]
    }
}
if (current.length > largest.length) {
    largest = current;
}

return largest
}
let l='iam here djjjee eer'
console.log(bigword(l));

 