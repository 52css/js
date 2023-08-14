// 时间复杂度O(n)、 空间复杂度O(n)
function twoNumAdd(arr, target) {
  if (Array.isArray(arr)) {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
      let item = arr[i];
      if (map[target - item] !== undefined) {
        return [target - item, item];
      } else {
        map[item] = true;
      }
    }
  }

  return [];
}

console.log(twoNumAdd([8, 2, 6, 5, 4, 1, 3], 7)); // 得到 [2, 5]
