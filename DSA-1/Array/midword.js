let sentence='iam here for conquer the word'
let current=''
for(let i=0;i<sentence.length;i++){
    if(sentence[i]==' '){
         current=''
    }else{
  
     current+=sentence[i]
    }

}
// let newone=current+' '+sentence.slice(0,-current.length)
// sentence=newone
console.log(sentence);

console.log(sentence.slice(0,-current.length));



