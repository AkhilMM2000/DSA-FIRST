function replaceWithNthAlphabet(str, n) {
   let result=''
   for(let i=0;i<str.length;i++){
    let char=str[i]
if(char>='A'&&char<='Z'){
 let newstr=String.fromCharCode((char.charCodeAt(0)-'A'.charCodeAt(0)+n)%26+'A'.charCodeAt(0))
result+=newstr


}else if(char>='a'&&char<='z'){
    let newstr=String.fromCharCode((char.charCodeAt(0)-'a'.charCodeAt(0)+n)%26+'a'.charCodeAt(0))
    result+=newstr
}
else{
    result+=char
}

   }

   return result

}
String.fromCharCode(('a'.charCodeAt(0)-'a'.charCodeAt(0)+n)%26+'a'.charCodeAt(0))

// Example Usage:
let inputStr = 'zzz'
let n = 3;
let outputStr = replaceWithNthAlphabet(inputStr, n);
console.log(outputStr); // Outputs: "Khoor, Zruog!"
