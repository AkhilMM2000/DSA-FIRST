
function MaxsubArray(nums){
let maxsum=nums[0]
let start;
let end;
for(let i=0;i<nums.length;i++){
    let sum=0
    for(let j=i;j<nums.length;j++){
       sum=sum+nums[j]
       if(sum>maxsum){
        maxsum=sum
        start=i
        end=j
       }

    }


}
return {maxsum:maxsum,array:nums.slice(start,end+1)}

}
let arr=[-2, 1, -3, 4, -1, 2, 1, -5, 4]
                                             ///we can done the above problem in O(n) time complexity using Kadane's Algorithm(leetcode number-53)
function Maxsub(arr){
let sum=0;
let maximum=arr[0]
for(let i=0;i<arr.length;i++){
     sum+=arr[i]
  if(sum>maximum){
    maximum=sum
  }
  if(sum<0){
    sum=0
  }

}
return maximum

}
console.log(Maxsub(arr));
function sumax(ar){
let sum=0
let maxsum=ar[0]
for(let i=0;i<ar.length;i++){
sum+=arr[i]
if(sum>maxsum){
  maxsum=sum
}
if(sum<0){
  sum=0
}
}
return maxsum

}
console.log(sumax([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
