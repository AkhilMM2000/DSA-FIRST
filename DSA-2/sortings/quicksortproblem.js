const students = [
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 23 },
    { name: 'David', age: 21 },
];


function QuickSort(arr){
    if(arr.length<2){
        return arr
    }
   const pivot=arr[0]
   let left=[]
   let right=[]
   for(let i=1;i<arr.length;i++){
        if(pivot.age<arr[i].age){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
   }

   return [...QuickSort(left),pivot,...QuickSort(right)]

}
console.log(QuickSort(students));
