class MyArray {
  constructor () {
    this.array = [];
  }
  get length() { return this.array.length }

  /**
   * @param {*} value - The value to be added to the array
   */
  add(value) {
    return this.array.push(value)
  }

  /**
   * Remove will remove the value, if present, and return the modified array
   * @param {*} value - The value to be removed, if present, from the array
   */
  remove(value) {
    this.array = this.array.filter( current => {
      if (current === value) { return false; }
      else { return true; }
    })
  }

  /**
   * indexValue will return the specific value at that index; undefined if not present
   * @param {number} index - the index for which to return a value
   */
  indexValue(index) {
    return this.array[index];
  }

  print() {
    console.log(this.array.join(''))
  }

  search(value) {
    return this.array.includes(value);
  }
}

let myArr2 = new MyArray();
console.log(myArr2.length);
myArr2.add(2)
myArr2.add(3)
console.log(myArr2.length);


