class Makequeue {
    constructor() {
        this.items = []
    }

    enqueue(element) {
        this.items.push(element)
    }

    dequeue() {
        this.items.shift()

    }
    IsEmpty() {
        return this.items.length === 0
    }
    peek() {
        if (!this.IsEmpty()) {
            return this.items[0]
        }
        return null
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString());

    }

}
const queue = new Makequeue()
console.log(queue.IsEmpty());
queue.enqueue(13)
queue.enqueue(23)
queue.enqueue(3)
queue.enqueue(17)
console.log(queue.size());
queue.print()
queue.dequeue()
queue.print()
