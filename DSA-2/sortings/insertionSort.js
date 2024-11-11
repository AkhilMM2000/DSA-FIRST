
function insort(arr){
    for(let i=1;i<arr.length;i++){
        const key=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>key){
             arr[j+1]=arr[j]
             j--
        }
        arr[j+1]=key

    }
    return arr
}
let ar=[3,18,-4,3,2,13]
console.log(insort(ar));
//output [ -4, 2, 3, 3, 13, 18 ]