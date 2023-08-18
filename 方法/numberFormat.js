/**
 * 数字格式化，常见有如下转换
 * 【金额】输入：123456789，输出: ¥123,456,789.00
 * 【距离】输入：8848.86（珠穆朗玛峰高度），输出: 8,848.86m
 * 【字节】输入：1024，输出: 1,024 MB
 * 【百分比】输入：95，输出: 95%
 * 【重量】输入：0.25，输出: 0.25kg
 * 【评论数】输入：123456，输出: 12万+
 */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
function numberFormat(num, type) {
  // 金额
  if (type === 'currency') {
    return new Intl.NumberFormat(
      'zh-CN', {
        style: 'currency',
        currency: 'CNY'
      }).format(num);
  } else if (type) {
    return new Intl.NumberFormat('en-US', {
      style: 'unit',
      unit: type
    }).format(num);
  } else {
    const result = new Intl.NumberFormat('zh-CN', {
      notation: 'compact'
    }).format(num);

    return result + (/[万亿]/.test(result) ? '+' : '');
  }
}

console.log(numberFormat(123456789, 'currency'));
console.log(numberFormat(8848.86, 'meter'));
console.log(numberFormat(1024, 'megabyte'));
console.log(numberFormat(95, 'percent'));
console.log(numberFormat(0.25, 'kilogram'));
console.log(numberFormat(123456));