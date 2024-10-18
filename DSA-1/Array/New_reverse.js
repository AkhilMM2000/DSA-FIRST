
let arr=[1,2,3,4,5]
let n=Math.floor(arr.length/2)
let leftstart=arr.length-1
let rightstart=0
while(leftstart>rightstart){
    let temp= arr[leftstart]
    arr[leftstart]=arr[rightstart]
    arr[rightstart]=temp
    leftstart--
    rightstart++
}

console.log(arr);
