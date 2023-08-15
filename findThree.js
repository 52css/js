/**
 * 三数之和
题目： 给定一个数组nums，判断 nums 中是否存在三个元素a，b，c，使得 a + b + c = target，找出所有满足条件且不重复的三元组合

输入： nums: [5, 2, 1, 1, 3, 4, 6] ；target:8

输出： [[1, 1, 6], [1, 2, 5], [1, 3, 4]]
 */

// 用`双端指针`的方式，将三数之和转化为两数之和
function findThree(arr, target) {
  const result = [];
  if (Array.isArray(arr)) {
    // 数组排序，从小到大
    arr.sort((a, b) => a - b); // [1, 1, 2, 3, 4, 5, 6]

    for(let i = 0; i < arr.length; i ++) {
      if (i && arr[i] === arr[i - 1]) continue;
      let left = i + 1;
      let right = arr.length - 1;
      while(left < right) {
        const sum = arr[i] + arr[left] + arr[right];

        if (sum > target) {
          right --;
        } else if (sum < target) {
          left ++;
        } else {
          result.push([arr[i], arr[left++], arr[right--]]);
          while (arr[left] == arr[left - 1]) {
            left ++;
          }
          while (arr[right] == arr[right + 1]) {
            right --;
          }
        }
      }
    }

    return result;
  }

  return []
}

console.log(findThree([5, 2, 1, 1, 3, 4, 6], 8))