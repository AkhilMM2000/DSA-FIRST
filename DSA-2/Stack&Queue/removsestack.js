let stack=[13,2,3,4,7]

function removeIndex(arr, index) {
    if (index < 0 || index >= arr.length) {
        return arr;
    }
    
    const stack = [];
    
    
    for (let i = arr.length - 1; i > index; i--) {
        stack.push(arr.pop());
    }
 
    arr.pop();

    while (stack.length > 0) {
        arr.push(stack.pop());
    }
    
    return arr;
}
console.log(removeIndex(stack));
