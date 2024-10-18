
let nums=[3,99,-1,100]//[5,6,7,1,2,3,4]
let k=3%nums.length
let arr=[]
let start=nums.length-k
for(let i=start;i<nums.length;i++){
    arr.push(nums[i])
}
for(let i=0;i<k;i++){
    arr.push(nums[i])
}
for(let i=0;i<nums.length;i++){
 nums[i]=arr[i]

}
console.log(nums);
