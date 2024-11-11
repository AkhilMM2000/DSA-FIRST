//find the 3 largest elent from the  array you can use the sorting algorith but cannot sort entire array 

//lets go throgh selection sort which is select largest elemnt from each iteration
const numbers = [12, 5, 23, 7, 87, 23, 12, 54, 98];
function thirdlargest(arr){
  let result=[]
   
 for(let i=0;i<arr.length-1;i++){
        let min=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[min]<arr[j]){
                min=j
            }
        }

        result.push(arr[min])
      arr[min]=-Infinity
       if(result.length==3){
        return result
       }

 }
// Problem 4: Sort fruits by custom priority order
const fruits = ["apple", "banana", "orange", "apple", "mango", "banana"];
const priority = ["banana", "apple", "mango", "orange"];

// Expected output: ["banana", "banana", "apple", "apple", "mango", "orange"]
// Sort based on priority array order



}
console.log(thirdlargest(numbers));

// Problem 6: Sort array1 based on array2's order
const array1 = ["apple", "banana", "orange", "grape"];
const array2 = [3, 1, 4, 2];

// Expected output: array1 after sorting according to array2's values
// ["banana", "grape", "apple", "orange"]