/**
 * 数字格式化
 * 题目：输入一组数字，需要格式化成金额、距离等
 * 金额输入：123456789，输出: ¥123,456,789.00
 * 金额大写输入：123456789.12，输出: 壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分
 * 金额大写输入：10000，输出: 壹万元整
 * 距离输入：8848.86（珠穆朗玛峰高度），输出: 8,848.86m
 * 字节输入：1024，输出: 1,024 MB
 * 百分比输入：95，输出: 95%
 * 重量输入：0.25，输出: 0.25kg
 * 评论数输入：123456，输出: 12万+
 */
/**
 * Intl.NumberFormat(locales, options)):
 * locales: 地区，默认为当前环境的语言
 * options: 选项，包含以下属性
 * 类型单位
角度: degree
面积: acre, hectare
百分比: percent
字节: bit, byte, kilobit, kilobyte, megabit, megabyte, gigabit, gigabyte, terabit, terabyte, petabyte
时间类长度: millisecond, second, minute, hour, day, week, month, year
长度或高度或深度: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile, mile-scandinavian
质量:gram, kilogram, ounce, pound, stone
温度: celsius, fahrenheit
容积: liter, milliliter, gallon, fluid-ounce
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
  } else if (type === 'bigCurrency') {
    const result = new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec', {
      useGrouping: false,
    }).format(num)
    return result + /\./.test(result) ? '' : '整';
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
console.log(numberFormat(123456789.12, 'bigCurrency'));
console.log(numberFormat(123456789.12, 'bigCurrency'));
console.log(numberFormat(8848.86, 'meter'));
console.log(numberFormat(1024, 'megabyte'));
console.log(numberFormat(95, 'percent'));
console.log(numberFormat(0.25, 'kilogram'));
console.log(numberFormat(123456));