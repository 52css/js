/**
 * 字符串所有排列
题目： 输入一个字符串，打印出该字符串中，所有字符的排列

输入： 'abc'

输出： ['abc', 'acb', 'bca', 'bac', 'cab', 'cba']
递归。abc的所有组合值可以分为以下部分：
1. a+ 剩余字母组合值；
2. b+ 剩余字母组合值；
3. c+ 剩余字母组合值；
 */

function stringGroup(str) {
  if (str.length <= 1) {
    return [str]
  }
  const result = [];
  for (let i = 0; i < str.length; i ++) {
    const item = str[i]
    const notItem = str.slice(0, i) + str.slice(i + 1)
    const notItemResult = stringGroup(notItem).map(x => item + x)

    result.push(...notItemResult)
  }

  return result
}

// 输出： ['abc', 'acb', 'bca', 'bac', 'cab', 'cba']
console.log(stringGroup('abc'));