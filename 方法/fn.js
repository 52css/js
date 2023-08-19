/**
 * 函数 的巧用
 * 常见有：函数的默认值、强制参数、隐式返回值
 * 【代码示例】
 */
// 函数默认值
// 注意，传入参数为undefined或者不传入的时候会使用默认参数，但是传入null还是会覆盖默认参数。
var func1 = (l, m = 3, n = 4 ) => (l * m * n);

console.log(func1(2))

// 强制参数
var required = ( ) => {
  throw new Error('Missing parameter!');
}
var func2 = (bar = required()) => bar;

console.log(func2(22))

// 隐式返回值
function calcCircumference(diameter) {
  return Math.PI * diameter
}
var func3 = diameter => Math.PI * diameter;

console.log(func3(100))
