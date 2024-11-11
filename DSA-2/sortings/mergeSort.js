//Try the leetcode number 56 merge interval
// Original:        [38, 27, 43, 3, 9, 82, 10]
//                   /                      \
// Left:        [38, 27, 43, 3]          [9, 82, 10]
//             /         \               /       \
//       [38, 27]      [43, 3]        [9, 82]    [10]
//       /   \          /   \          /   \
//     [38] [27]     [43]  [3]      [9]   [82]

// Start Merging:     [27, 38]      [3, 43]       [9, 82] [10]
//                     \               /            \       /
//                 [3, 27, 38, 43]      [9, 10, 82]

// Final Merge:        [3, 9, 10, 27, 38, 43, 82]

function mergesort(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)
    
return merge(mergesort(left),mergesort(right))
}
function merge(left,right){
    let sortarray=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sortarray.push(left.shift())
        }{
            sortarray.push(right.shift())
        }
    }

return [...sortarray,...left,...right]
}
console.log(mergesort([12,3,1,2,5,-2,3,4]));


// //output [
//   -2, 1, 3,  2,
//   4, 3, 5, 12
// ]
