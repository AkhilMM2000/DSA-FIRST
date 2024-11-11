
function validString(str) {
let stack=[]
for(let i=0;i<str.length;i++){
    let char=str[i]
    if(char=='{'||char=='('||char=='['){
        stack.push(char)
    }else if(char=='}'||char==')'||char==']'){
        if(isempty(stack)){
            return false
        }
   const value=stack.pop()
   if(char=='}'&&value!=='{'||char==']'&&value!=='['||char==')'&&value!=='('){
    return false
   }

    }

}
return isempty(stack)
}

function isempty(stack){
    return stack.length===0
}
console.log(validString('[({})]'));

