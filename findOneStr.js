/**
 * 第一个不重复的字符
题目： 输入一个字符串，找到第一个不重复字符的下标

输入： 'abcabcde'

输出： 6
 */

// 时间复杂度O(n)、 空间复杂度O(n)
function findOneStr(str) {
  // 拆分成数组
  const arr = str.split('')
  // 转换map，得到char出现次数
  const map = arr.reduce((prev, item) => {
    if (prev[item]) {
      prev[item] ++;
    } else {
      prev[item] = 1;
    }
    return prev
  }, {})

  // 找到第一个出现次数为1的字符
  for (let i = 0; i < arr.length; i ++) {
    if (map[arr[i]] === 1) {
      return i
    }
  }

  return -1;
}

console.log(findOneStr('abcabcde')) // 6