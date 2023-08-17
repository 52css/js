/**
 * 快速排序
时间复杂度为O(nlogn)，不稳定
输入：[97, 72, 68, 51, 45, 29]
输出：[29, 45, 51, 68, 72, 97]
 */

function quickSort(list) {
  if (Array.isArray(list)) {
    if (list.length <= 1) {
      return list;
    }
    const mid = Math.floor(list.length / 2);
    const base = list.splice(mid, 1)[0];
    const left = [];
    const right = [];

    list.forEach(item => {
      if (item < base) {
        left.push(item);
      } else if (item > base) {
        right.push(item);
      }
    })

    return quickSort(left).concat(base, quickSort(right));
  }

  return new Error('输入的参数不是数组');
}

// 输出 [29, 45, 51, 68, 72, 97]
console.log(quickSort([97, 72, 68, 51, 45, 29]));