//https://www.programiz.com/online-compiler/3gf2Q0QDBuz5j,https://www.programiz.com/online-compiler/2gf2jsRrauis5

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert a value into the linked list in sorted order
    insert(value) {
        const newNode = new LinkedListNode(value);

        // Case 1: If the list is empty, set the head to the new node
        if (!this.head) {
            this.head = newNode;
            this.size++;
            return;
        }

        // Case 2: If the new value is smaller than the head, insert at the beginning
        if (value < this.head.value) {
            newNode.next = this.head;
            this.head = newNode;
            this.size++;
            return;
        }

        // Case 3: Find the correct position to insert the new node
        let current = this.head;
        while (current.next && current.next.value < value) {
            current = current.next;
        }

        // Insert the new node after the current node
        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    // Print the linked list values
    print() {
        if (!this.head) {
            console.log("Empty list");
            return;
        }

        let current = this.head;
        let result = '';
        while (current) { // Now, we also print the last node
            result += current.value + '=> ';
            current = current.next;
        }
         
        console.log(result.trim()); // Trim to remove trailing space
    }
removeduplicate(){
let current=this.head
while(current&&current.next!=null){

    if(current.value==current.next.value){
        current.next=current.next.next
    }else{
        current=current.next
    }

}


}

nodereverse(){
    let next;
    let cur=this.head
    let prev=null
    while(cur){
 next=cur.next
 cur.next=prev
 prev=cur
 cur=next
    }
 this.head=prev

}


}

// Example usage
const list = new LinkedList();
list.insert(5);
list.insert(1);
;
list.insert(3);
list.insert(10);
list.insert(7)
list.insert(7)
list.removeduplicate()
list.nodereverse()
list.print(); // Output: 1 3 5 7 10
