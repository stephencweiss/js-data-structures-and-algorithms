/**
 * The Stack is a data structure that is LIFO
 * The built-in Array works well
 * Unlike the array, only the end of the stack can be accessed
 */
class Stack {
  constructor(...items) {
    this.items = [...items];
  }
  /**
   * Push is the method to add item(s) to the top of the stack.
   * @arg  {...any} items - items to add to the stack
   */
  push(...items) {
    this.items.push(...items)
  }
  /**
   * Pop removes the top element from the stack
   * @returns {*} The top most element in the stack or undefined if the stack is empty.
   */
  pop() {
    if (!this.isEmpty()) {
      return this.items.pop()
    } else {
      return undefined;
    }
  }
  /**
   * Peek looks at the top of the stack, without removing it
   * @returns {*} Returns the top most element of the stack
   */
  peek() {
    return this.items(this.items.length-1)
  }
  /**
   * @returns {Boolean} Returns true/false for whether or not the stack is empty
   */
  isEmpty() {
    return this.items.length === 0 ? true : false;
  }
  /**
   * Console logs the entire stack
   */
  printStack() {
    let str = '';
    this.items.forEach(item => str += (item + ' '));
    return str;
  }
}

const stack = new Stack()
console.log(`isEmpty? --> `, stack.isEmpty())
console.log(stack)
stack.push(1,2,3)
console.log(stack);
const pop = stack.pop()
console.log(`pop is -->`, pop);
console.log(`stack is now -->`, stack);
console.log(stack.printStack());