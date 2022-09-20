class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
    }
    append(value) {
        const newNode = new Node(value, null);
        if (!this._head) {
            this._head = newNode;
        }
        else {
            this._tail.nextNode = newNode;
        }
        this._tail = newNode;
    }
    prepend(value) {
        const new_node = new Node(value, this._head);
        this._head = new_node;
    }
    toString() {
        let current_node = this._head;
        let str = '';
        while (current_node) {
            str += '( ' + current_node.value + ' )';
            str += ' -> ';
            current_node = current_node.nextNode;
        }
        return str + 'null';
    }
    size() {
        if (!this._head) { return 0; }
        let i = 1;
        let current_node = this._head;
        while (current_node.nextNode) {
            i += 1;
            current_node = current_node.nextNode;
        }
        return i;
    }
    head() { return this._head.value; }

    tail() { return this._tail.value; }

    at(index) {
        let current_node = this._head;
        let i = 0;
        while (current_node) {
            if (i === index) { return current_node.value; }
            i++;
            current_node = current_node.nextNode;
        }
        return null;
    }
    pop() {
        if (!this._head.nextNode) {
            this._head = null;
            return null;
        }
        let current_node = this._head;
        while (current_node.nextNode.nextNode) {
            current_node = current_node.nextNode;
        }
        const last_element = current_node.nextNode;
        current_node.nextNode = null;
        return last_element;
    }
    contains(value) {
        let current_node = this._head;
        while (current_node) {
            if (current_node.value === value) { return true; }
            current_node = current_node.nextNode;
        }
        return false;
    }
    find(value) {
        let index = 0;
        let current_node = this._head;
        while (current_node) {
            if (current_node.value === value) { return index; }
            current_node = current_node.nextNode;
            index++;
        }
    }
    insertAt(value, index) {
        const newNode = new Node(value, null);
        if (index === 0) {
            newNode.nextNode = this._head;
            this._head = newNode;
            return;
        }
        let current_node = this._head;
        let i = 0;

        while (current_node) {
            const next = current_node.nextNode;
            if (i === (index - 1)) {
                current_node.nextNode = newNode;
                newNode.nextNode = next;
                return;
            }
            current_node = current_node.nextNode;
            i++;
        }
        return null;
    }

    removeAt(index) {
        if (index === 0) {
            this._head = this._head.nextNode;
        }
        let current_node = this._head;
        let i = 0;
        while (current_node) {
            if (i === (index - 1)) {
                if (current_node.nextNode) {
                    current_node.nextNode = current_node.nextNode.nextNode;
                    return;
                }
                else { return; }

            }
            current_node = current_node.nextNode;
            i++;
        }
    }
}

class Node {
    constructor(value, nextNode) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// Tests
const x = new LinkedList();
// Appending
x.append(1);
x.append(2);
x.append(5);
x.append(7);

// Transforming to sring
console.log(x.toString());

// Prepending
x.prepend(12);

console.log(x.toString());

// Showing size
console.log(x.size());

// Head and tail methods
console.log(x.head());
console.log(x.tail());

console.log(x.at(6));

// Inserting at specific index
x.insertAt(69, 2);

console.log(x.toString());

// Removing at specific index
x.removeAt(3);

console.log(x.toString());

// Popping elements
x.pop();
x.pop();
x.pop();

console.log(x.toString());
