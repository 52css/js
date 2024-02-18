var obj = {
  a: undefined
}

console.log(a in obj);

console.log(obj.hasOwnProperty('a'))

console.log(Object.keys(obj).includes(a));

