/**
 * 插入排序
时间复杂度为O(n²)，稳定
输入：[97, 72, 68, 51, 45, 29]
第一次排序：[72, 97, 68, 51, 45, 29]
第二次排序：[68, 72, 97, 51, 45, 29]
第三次排序：[51, 68, 72, 97, 45, 29]
第四次排序：[45, 51, 68, 72, 97, 29]
第五次排序：[29, 45, 51, 68, 72, 97]
输出：[29, 45, 51, 68, 72, 97]
 */

function insertSort(arr) {
  if (Array.isArray(arr)) {
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      let item = arr[i];

      while (j > 0 && arr[j - 1] > item) {
        arr[j] = arr[j - 1];
        j--;
      }

      arr[j] = item;
    }
    return arr;
  }

  return new Error('arr is not an Array');
}

// 输出 [29, 45, 51, 68, 72, 97]
console.log(insertSort([97, 72, 68, 51, 45, 29]));