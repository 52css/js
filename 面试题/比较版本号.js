function* walk(str) {
  let part = '';
  let terminals = ['.', '-'];

  for (let i = 0; i < str.length; i++) {
    if (terminals.includes(str[i])) {
      yield part;
      part = '';
    } else {
      part += str[i];
    }
  }

  if (part) {
    yield part;
  }
}

const iterator = walk('1.5.6-alpha.1');
console.log(iterator.next()); // { value: '1', done: false }
console.log(iterator.next()); // { value: '5', done: false }
console.log(iterator.next()); // { value: '6', done: false }
console.log(iterator.next()); // { value: 'alpha', done: false }
console.log(iterator.next()); // { value: '1', done: false }
console.log(iterator.next()); // { value: undefined, done: true }