class Demohas {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // Hash function to compute the index
    hashkey(key) {
        let value = 0;
        for (let i = 0; i < key.length; i++) {
            value += key.charCodeAt(i);
        }
        return value % this.size;
    }

    // Set a key-value pair
    set(key, value) {
        const index = this.hashkey(key);
        const bucket = this.table[index];

        if (!bucket) {
            this.table[index] = [[key, value]];
        } else {
            const exist = bucket.find(item => item[0] == key);
            if (exist) {
                exist[1] = value;  // Update the value if key exists
            } else {
                bucket.push([key, value]);  // Add new key-value pair
            }
        }
    }

    // Get the value for a key
    get(key) {
        const index = this.hashkey(key);
        const bucket = this.table[index];

        if (bucket) {
            const exist = bucket.find(item => item[0] == key);
            if (exist) {
                return exist[1];  // Return the value if found
            }
        }
        return undefined;  // Return undefined if key not found
    }

    // Remove a key-value pair
    remove(key) {
        const index = this.hashkey(key);
        const bucket = this.table[index];

        if (bucket) {
            const exist = bucket.find(item => item[0] == key);
            if (exist) {
                bucket.splice(bucket.indexOf(exist), 1);  // Remove the key-value pair
            }
        }
    }

    // Display the filled indices of the table
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}

// Example usage
const hashTable = new Demohas(10);
hashTable.set('name', 'John');
hashTable.set('age', 30);

hashTable.set('gender', 'male');

console.log(hashTable.get('name'));   // Output: John
hashTable.remove('age');
console.log(hashTable.get('age'));    // Output: undefined
hashTable.display();
console.log('demo');
