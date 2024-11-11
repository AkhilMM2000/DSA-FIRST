
function bublesort(arr){
    let swapped;
 do {
    swapped=false
    for(let i=0;i<arr.length-1;i++){
    
        if(arr[i]>arr[i+1]){
         
          [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
          swapped=true

        }
  
    }
 } while (swapped);
    
return arr
}
console.log(bublesort([-12,5,7,3,-2]));

// output:[ -12, -2, 3, 5, 7 ]