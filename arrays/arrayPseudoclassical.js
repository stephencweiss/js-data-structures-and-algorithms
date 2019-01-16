function MyArray() {
  this.array = [];
}

/**
 * @param {*} value - The value to be added to the array
 */
MyArray.prototype.add = function (value) {
  return this.array.push(value);
}

/**
 * Remove will remove the value, if present, and return the modified array
 * @param {*} value - The value to be removed, if present, from the array
 */
MyArray.prototype.remove = function (value) {
  this.array = this.array.filter( function(current) {
    if (current === value) { return false; }
    else { return true; }
  })
}

/**
 * indexValue will return the specific value at that index; undefined if not present
 * @param {number} index - the index for which to return a value
 */
MyArray.prototype.indexValue = function (index) {
  return this.array[index]
}

/**
 * Will print the values of the array as a string concatenated by a space
 */
MyArray.prototype.print = function (){
  console.log(this.array.join(' '))
}

/**
 * Will return true if the value is present and false if it is not
 * @param {*} value - The sought value
 */
MyArray.prototype.search = function (value) {
  return this.array.includes(value)
}

/**
 * Returns the number of elements in the array
 */
MyArray.prototype.length = function () {
  return this.array.length
}

let myArr = new MyArray()
myArr.print(); // ''
myArr.add(3)
myArr.add(4)
myArr.add(8)
myArr.print() // 3 4 8
myArr.remove(4)
myArr.print() // 3 8
console.log(myArr.indexValue(1)); // 8
console.log(myArr.indexValue(3)); // undefined
console.log(myArr.search(4)) // false
console.log(myArr.search(8)) // true
console.log(myArr.length()) // 2