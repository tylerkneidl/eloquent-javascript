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
    const index = this.collection.indexOf(value);
    if (index > -1) {
      this.collection.splice(index, 1);
    }
  }
  has(value) {
    return this.collection.includes(value);
  }

  static from(value) {
    const outputGroup = new Group();
    for (const el of value) {
      outputGroup.add(el);
    }
    return outputGroup;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.index = 0;
    this.group = group;
  }

  next() {
    if (this.index === this.group.collection.length) {
      return { done: true };
    } else {
      let output = { value: this.group.collection[this.index], done: false };
      this.index += 1;
      return output
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
