/** Node: node for a queue. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** enqueue(val): add new value to end of the queue. Returns undefined. */

	enqueue(val) {
		// create a new node
		const newNode = new Node(val);
		if (!this.size) {
      //if there is not node the make the first and last val as the new node
			this.first = newNode;
			this.last = newNode;
		} else {
      //make newNode the next val for the last item
			this.last.next = newNode;
      // the last val is newNode
			this.last = newNode;
		}
		this.size += 1;
		return undefined;
	}

	/** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

	dequeue() {
		if (!this.size) {
      //throw an error if the queue is empty
			throw new Error('The queue is empty');
		}
    // we are removing the first time
		let nodeToRemove = this.first;
		if (this.size === 1) this.last = null;

		this.first = this.first.next;

		this.size -= 1;
		return nodeToRemove.val;
	}

	// dequeue() {
	// 	if (!this.first) throw new Error("Can't dequeue from an empty queue.");

	// 	let temp = this.first;
	// 	if (this.first == this.last) {
	// 		this.last = null;
	// 	}
	// 	this.first = this.first.next;
	// 	this.size--;
	// 	return temp.val;
	// }

	/** peek(): return the value of the first node in the queue. */

	peek() {
		return this.first.val;
	}

	/** isEmpty(): return true if the queue is empty, otherwise false */

	isEmpty() {
		return this.size === 0;
	}
}

module.exports = Queue;
