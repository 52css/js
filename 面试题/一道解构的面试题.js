Object.prototype[Symbol.iterator] = function*() {
  for (let p in this) {
    yield this[p]
  }
}

var [a, b] = {
  a: 3,
  b: 4,
};

console.log(a, b);