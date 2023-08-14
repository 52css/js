/**
两数之和
题目： 给定一个数组 nums 和一个目标值 target，在该数组中找出和为目标值的两个数

输入： nums: [8, 2, 6, 5, 4, 1, 3] ； target:7

输出： [2, 5]
 */
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
