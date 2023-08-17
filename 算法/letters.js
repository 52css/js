/**
 * 消失的字母
  题目 输入一组字符串，找出消失的字符
  输入 'abce' 输出 'd'
  输入 'bcdf' 输出 'e'
 */

  function letters(str) {
    for (let i = 0; i < str.length; i ++) {
      // 取出当前字符ascii码
      const code = str.charCodeAt(i);
      // 期望的ascii码
      const expected = str.charCodeAt(0) + i;

      // 如果不想等
      if (code !== expected) {
        return String.fromCharCode(expected);
      }
    }
    return undefined;
  }

  console.log(letters('abce'));
  console.log(letters('bcdf'));