/**
 * 数字格式化
 * 题目：输入一组数字，需要格式化成金额、距离等
 * 金额输入：123456789，输出 ¥123,456,789.00
 * 距离输入：8848.86（珠穆朗玛峰高度），输入8,848.86m
 * 字节输入：1024，输入1,024 MB
 * 百分比输入：95，输入95%
 * 重量输入：0.25，输入0.25g
 * 评论数输入：123456，输入12.3万
 */
function numberFormat(num, type) {
  if (type === 'currency') {
    return new Intl.NumberFormat('zh-CN', {
      style: 'currency',
      // 输出人民币
      currency: 'CNY',
      // 输出美元，语言设置为'en'
      // currency: 'USD',
      // currencySign选项启用记帐格式
      currencySign: 'accounting',
    }).format(num);
  } else if (type) {
    return new Intl.NumberFormat('en-US', {
      style: 'unit',
      unit: type,
    }).format(num);
  } else {
    const result = new Intl.NumberFormat('zh-CN', {
      notation: 'compact',
    }).format(num)
    return result + (/[万亿]/.test(result) ? '+' : '');
  }
}

console.log(numberFormat(123456789, 'currency'));
console.log(numberFormat(8848.86, 'meter'));
console.log(numberFormat(1024, 'megabyte'));
console.log(numberFormat(95, 'percent'));
console.log(numberFormat(0.25, 'kilogram'));
console.log(numberFormat(123456));