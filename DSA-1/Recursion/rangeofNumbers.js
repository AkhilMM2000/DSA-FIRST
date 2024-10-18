
//This function will return an array which contain values start to end using recursion-----
function rangeOfNumbers(start,end){
   
     if(start>end){
        return []
     }
   
     let numbers=rangeOfNumbers(start,end-1)
     numbers.push(end)

return numbers

}
console.log(rangeOfNumbers(0,5));
