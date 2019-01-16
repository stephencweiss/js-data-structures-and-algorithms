function MyArray() {
  const obj = Object.create(myArrayMethods);
  obj.array = [];

  return obj;
}

myArrayMethods = {
  add: function(value) {
    return this.array.push(value)
  },
  remove: function(value) {
    this.array = this.array.filter(current => {
      if (current === value) {return false; }
      else { return true; }
    })
  },
  indexValue: function(index) {
    return this.array[index];
  },
  print: function() {
    console.log(this.array.join(' '))
  },
  search: function(value) {
    return this.array.includes(value);
  },
  length: function() {
    return this.array.length;
  },
}

const myArr = new MyArray()
myArr.add(2);
myArr.add(8);
myArr.add(3);
myArr.print();
console.log(myArr.indexValue(1)); // 8
console.log(myArr.length()); // 3
console.log(myArr.search(4)); // false
console.log(myArr.search(8)); // true
myArr.remove(3);
console.log(myArr.length()); // 2