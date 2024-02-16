const obj = {
  a: 1,
  b: 2,
  get c() {
    return this.a + this.b;
  }
}

const p = new Proxy(obj, {
  get(target, key, receiver) {
    console.log('get', key);
    // return target[key];
    return Reflect.get(target, key, receiver);
  }
});

console.log(p.c); // get c 3



const obj2 = {
  a: 1,
  b: 2,
  [Symbol('c')]: 3,
}

Object.defineProperty(obj2, 'd', {
  value: 4,
  enumerable: false,
});

console.log(Object.keys(obj2)); // [ 'a', 'b' ]

console.log(Reflect.ownKeys(obj2)); // [ 'a', 'b', Symbol(c), 'd' ]