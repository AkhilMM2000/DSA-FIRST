let k=[1,2,3]
function subArray(nums){
   let result=[]
    let temp=[]
function Subsets(nums,i){
    
 if(i===nums.length){
    return result.push([...temp])
 }

temp.push(nums[i])
Subsets(nums,i+1)
temp.pop()
Subsets(nums,i+1)

}
Subsets(nums,0)
return result
}

console.log(subArray(k));
