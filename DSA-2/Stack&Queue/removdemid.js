function deleteAtIndex(stack, currentIndex, targetIndex) {
    // Base case: if we reach the target index, pop the element
    if (currentIndex === targetIndex) {
        stack.pop(); // Remove the element at the targetIndex from the top
        return;
    }

    // Pop the top element and store it temporarily
    let temp = stack.pop();

    // Recurse down to the next element
    deleteAtIndex(stack, currentIndex + 1, targetIndex);

    // Push the element back after the target element has been removed
    stack.push(temp);
}

// Example usage:
let stack = [1, 2, 3, 4, 5]; // Stack is [1, 2, 3, 4, 5] with 5 as the top element
let targetIndex = 2;  // Counting from the top, targeting element "3"

deleteAtIndex(stack, 0, targetIndex);
console.log(stack); // Expected Output: [1, 2, 4, 5]
