/**
 * 版本号排序
题目： 输入一组版本号，输出从大到小的排序

输入： ['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']

输出： ['10.2.1', '5.1.2', '2.1.0.1', '1.0.4.5', '0.402.1']
 */

function versionSort(arr) {
  return arr.sort((a, b) => {
    let i = 0;
    const arr1 = a.split('.')
    const arr2 = b.split('.')

    // '10.2.1' '10.2.1.3' => '10.2.1.3' 长度更长，帮本号更大
    // '10.2.1' '5.2.1' => 一次比较返回 '10.2.1'
    // '10.2.1' '10.2.3' => 比较到第三位才能得出

    while (true) {
      const s1 = arr1[i]
      const s2 = arr2[i]

      if (s1 === undefined && s2 === undefined) {
        return arr2.length - arr1.length;
      } else if (s1 === s2) {
        continue;
      } else {
        return s2 - s1;
      }
    }
  })
}

console.log(versionSort(['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5'])) // 得到['10.2.1', '5.1.2', '2.1.0.1', '1.0.4.5', '0.402.1']