/**
 * 滑动窗口最大值
题目： 给定一个数组 nums，有一个大小为 k 的滑动窗口，从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口中的k个数字。滑动窗口每次只向右移动一位，求返回滑动窗口最大值

输入： nums: [1,3,-1,-3,5,3,6,7]； k: 3

输出： [3, 3, 5, 5, 6, 7]
 */


function maxSlidingWindow(nums, k) {
  const result = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    result.push(Math.max(...nums.slice(i, i + k)));
  }

  return result;
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));