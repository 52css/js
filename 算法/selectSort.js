/**
 * 选择排序
时间复杂度为O(n²)，不稳定
输入：[97, 72, 68, 51, 45, 29]
第一次排序：[29, 72, 68, 51, 45, 97]
第二次排序：[29, 45, 68, 51, 72, 97]
第三次排序：[29, 45, 51, 68, 72, 97]
第四次排序：[29, 45, 51, 68, 72, 97]
第五次排序：[29, 45, 51, 68, 72, 97]
输出：[29, 45, 51, 68, 72, 97]
 */

function selectSort(arr) {
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length - 1; i ++) {
      let index = i;
      for (let j = i + 1; j < arr.length; j ++) {
        if (arr[j] < arr[index]) {
          index = j;
        }
      }
      if (index !== i) {
        // 解构赋值
        [arr[i], arr[index]] = [arr[index], arr[i]];
      }
    }
    return arr;
  }

  return new Error('arr is not array')
}

// 输出 [29, 45, 51, 68, 72, 97]
console.log(selectSort([97, 72, 68, 51, 45, 29]));
