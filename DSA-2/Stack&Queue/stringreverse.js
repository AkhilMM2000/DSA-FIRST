//reverse a string using stack
let str='hello'
function reverse(str){
    let stack=[]
    let string=''
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    while(stack.length){
        string+=stack.pop()
    }
   

   return string
}
console.log(reverse(str));
