

//this function make PascalCase string to snake_case
function namestr(str) {
    let newstr=str[0].toLowerCase()
    for(let i=1;i<str.length;i++){
       if(str[i].match(/[A-Z]/)){
      newstr=newstr+'_'+str[i].toLowerCase()
       }else{
        newstr+=str[i]
       }


    }
    return newstr
    
}
let str='MyPascalNum'
console.log(namestr(str));


toLowerCase()