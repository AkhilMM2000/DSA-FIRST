class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    removeDuplicates() {
        let current = this.head;
        while (current) {
          let runner = current;
          while (runner.next ) {
            if (runner.next.value === current.value) {
              runner.next = runner.next.next;
            } else {
              runner = runner.next;  // Move the runner to the next node
            }
          }
          current = current.next;  // Move current to the next node
        }
      }
    printList() {
        
        let current = this.head;
        let listValues = [];
        while (current) {
            listValues.push(current.value);
            current = current.next;
        }
        console.log(listValues.join(" -> "));
    }


}

let list = new LinkedList();
list.add(10);
list.add(20);
list.add(10)
list.add(30);
list.add(10);
list.add(20);
list.add(70);
list.removeDuplicates()
list.printList(); 
