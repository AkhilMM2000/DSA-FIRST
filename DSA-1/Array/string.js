//Eg: Write a function to replace each alphabet in the given string 
//with another alphabet occurring at the n-th position from each of them.
const str = 'abcd';
const n = 2;
const replaceNth = (str, n) => {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   let i, pos, res = '';
   for(i = 0; i < str.length; i++){
      pos = alphabet.indexOf(str[i]);
      res += alphabet[(pos + n) % alphabet.length];
   };
   
   return res;
};
console.log(replaceNth(str, n));
console.log(Math.pow(12,1));
