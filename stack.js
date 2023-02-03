/** Node: node for a stack. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	/** push(val): add new value to end of the stack. Returns undefined. */

	push(val) {
		let newNode = new Node(val);
		if (!this.size) {
			this.first = newNode;
			this.last = newNode;
		} else {
			//we are added it to the top
			let oldFirst = this.first;
			this.first = newNode;
			this.first.next = oldFirst;
		}
		this.size += 1;
		return undefined;
	}

	/** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

	pop() {
		if (!this.size) {
			//throw an error if the queue is empty
			throw new Error('The stack is empty');
		}
		// we are removing the  val on top, which is the last item in.
		let nodeToRemove = this.first;
		if (this.size === 1) this.last = null;

		this.first = this.first.next;

		this.size -= 1;
		return nodeToRemove.val;
	}

	/** peek(): return the value of the first node in the stack. */

	peek() {
		return this.first.val;
	}

	/** isEmpty(): return true if the stack is empty, otherwise false */

	isEmpty() {
		return this.size === 0 ? true : false;
		//return this.size === 0;
	}
}

module.exports = Stack;
