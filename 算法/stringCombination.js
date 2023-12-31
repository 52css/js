/**
 * 字符串所有组合
题目： 输入一个字符串，打印出该字符串中，所有字符的组合

输入： 'abc'

输出： ["abc", "ac", "ab", "bc", "c", "b", "a"]

思路
递归的思想。一个字符串的所有组合值包含三种情况：
1. 仅包含首字母
2. 首字母+除首字母外的字符串组合值
3. 除首字母外的字符串组合值
 */

function stringCombination(str) {
  if (str.length <= 1) {
    return [str]
  }
  const first = str[0]
  const arr = stringCombination(str.slice(1))
  const res1 = first
  const res2 = [...arr].map(x => first + x)
  const res3 = arr

  return res2.concat(res3, res1)
}

// 输出： ["abc", "ac", "ab", "bc", "c", "b", "a"]
console.log(stringCombination('abc'));