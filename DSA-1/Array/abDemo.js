let num=123
let last;
let reverse=0;

while(num>0){
   last=num%10
   reverse=reverse*10+last
   num=Math.floor(num/10)

}
console.log(reverse);
