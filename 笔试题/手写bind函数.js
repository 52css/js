function fn(a, b, c, d) {
  console.log('fn called');
  console.log('args', a, b, c, d);
  console.log('this', this);
}

Function.prototype.myBind = function(ctx, ...args) {
  const fn = this;
  return function(...subArgs) {
    const allArgs = [...args, ...subArgs];
    if (new.target) {
      return new fn(...allArgs);
    } else {
      return fn.apply(ctx, allArgs);
    }
  }
}

const newFn = fn.myBind('ctx', 1, 2);
console.log(new newFn(3, 4));