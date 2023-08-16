/**
 * 归并排序
时间复杂度为O(nlogn)，稳定
输入：[97, 72, 68, 51, 45, 29]
输出：[29, 45, 51, 68, 72, 97]
 */

function mergeSort(arr) {
  if (Array.isArray(arr)) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))

    return merge(left, right);
  }

  return new Error('输入的参数不是数组');

  // left.length === right.length
  // left.length === right.length + 1
  // left.length + 1 === right.length
  function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
      result.push(left[0] < right[0] ? left.shift() : right.shift())
    }

    return result.concat(left, right);
  }
}

// 输出 [29, 45, 51, 68, 72, 97]
console.log(mergeSort([97, 72, 68, 51, 45, 29]));