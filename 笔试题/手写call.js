Function.prototype.myCall = function(ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);
  const key = Symbol();
  Object.defineProperty(ctx, key, {
    value: this,
    enumerable: false,
  })
  const r = ctx[key](...args);
  return r;
}