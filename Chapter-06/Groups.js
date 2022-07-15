class Group {
  constructor() {
    this.collection = [];
  }
  add(value) {
    if (!this.has(value)) {
      this.collection.push(value);
    }
  }
  delete(value) {
    const index = this.collection.indexOf(value)
    if (index > -1) {
        this.collection.splice(index, 1)
    }
  }
  has(value){
    return this.collection.includes(value)
  }

  static from(value) {
    const outputGroup = new Group 
    for (const el of value) {
        outputGroup.add(el)
    }
    return outputGroup
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false