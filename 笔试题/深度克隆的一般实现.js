const cache = new WeakMap();
function deepClone(value) {
  if (typeof value !== "object" || value === null) {
    return value;
  }
  // value 是对象
  if (cache.has(value)) {
    return cache.get(value);
  }

  const result = Array.isArray(value) ? [] : {};
  Object.setPrototypeOf(result, Object.getPrototypeOf(value));
  cache.set(value, result);
  for (let key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = deepClone(value[key]);
    }
  }

  return result;
}

const obj = {
  a: 1,
  b: 2,
  // c: new Map(),
  d: function () {},
};
obj.e = obj;

console.log(deepClone(obj));
