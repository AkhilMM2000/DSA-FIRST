

function QuickSort(nums){
 if(nums.length<=1){
    return nums
 }
let pivot=nums[0]
let left=[]
let right=[]
for(let i=1;i<nums.length;i++){
    if(nums[i]>pivot){
        right.push(nums[i])
    }else{
        left.push(nums[i])
    }
}
return [...QuickSort(left),pivot,...QuickSort(right)]

}

console.log(QuickSort([12,3,4,1,2,5]));
// output [ 1, 2, 3, 4, 5, 12 ]