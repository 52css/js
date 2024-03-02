/**
 * 数组去重，
 * 两个属性相同的对象也认为是重复的
 * @param {Array} arr
 */
function uniqueArray(arr) {
  const result = [];
  for (const item of arr) {
    let isFind = false;
    for (const existItem of result) {
      if (equals(item, existItem)) {
        isFind = true;
        break;
      }
    }
    if (!isFind) {
      result.push(item);
    }
  }
  return result;
}

function isPrimitive(value) {
  return (
    value === null || (typeof value !== "object" && typeof value !== "function")
  );
}

function equals(value1, value2) {
  if (isPrimitive(value1) || isPrimitive(value2)) {
    return Object.is(value1, value2);
  }
  const entries1 = Object.entries(value1);
  const entries2 = Object.entries(value2);
  if (entries1.length !== entries2.length) {
    return false;
  }
  for (const [key, value] of entries1) {
    if (!value2.hasOwnProperty(key) || !equals(value, value2[key])) {
      return false;
    }
  }
  return true;
}

console.log(
  uniqueArray([
    { a: 1, b: undefined },
    { a: 1, c: undefined },
  ])
);
