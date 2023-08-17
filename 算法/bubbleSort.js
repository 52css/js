/**
 * 冒泡排序
时间复杂度为O(n²)，稳定排序算法
输入：[97, 72, 68, 51, 45, 29]
第一次： [72, 68, 51, 45, 29, 97]
第二次： [68, 51, 45, 29, 72, 97]
第三次： [51, 45, 29, 68, 72, 97]
第四次： [45, 29, 51, 68, 72, 97]
第五次： [29, 45, 51, 68, 72, 97]
输出：[29, 45, 51, 68, 72, 97]
 */

function bubbleSort(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j ++) {
        if (arr[j] > arr[j + 1]) {
          // 解构交换，不需要中间变量
          [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        }
      }
    }
    return arr;
  }
  return new Error('arr is not an Array');
}

console.log(bubbleSort([97, 72, 68, 51, 45, 29])) // [29, 45, 51, 68, 72, 97]