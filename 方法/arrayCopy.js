/**
 * 14 个拷贝数组的 JS 技巧
 */

// 技巧 1 - 使用Array.slice方法

var numbers = [1, 2, 3, 4, 5]

var copy = numbers.slice()
copy.push(6) // 添加新项以证明不会修改原始数组

console.log(copy)
console.log(numbers)

// 输出
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5]

// 技巧 2 - 使用Array.map方法
var numbers = [1, 2, 3, 4, 5]

var copy = numbers.map( num => num )
copy.push(6) // 添加新项以证明不会修改原始数组

console.log(copy);
console.log(numbers);

// 输出
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5]

// 技巧 3 - 使用Array.from 方法
var numbers = [1, 2, 3, 4, 5];

var copy = Array.from(new Set(numbers));
copy.push(6); // 添加新项以证明不会修改原始数组

console.log(copy);
console.log(numbers);

// 输出
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5]

// 技巧 4 - 使用展开操作符
var numbers = [1, 2, 3, 4, 5];

var copy = [...numbers];
copy.push(6); // 添加新项以证明不会修改原始数组

console.log(copy);
console.log(numbers);

// 输出
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5]

// 技巧 5 - 使用 Array.of 方法和展开操作符
var numbers = [1, 2, 3, 4, 5];

var copy = Array.of(...numbers);
copy.push(6); // 添加新项以证明不会修改原始数组

console.log(copy);
console.log(numbers);

// 输出 
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5]

// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array.of(7) 创建一个具有单个元素 7 的数组，而 Array(7) 创建一个长度为7的空数组（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）。

Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]

// 技巧 6 - 使用 Array 构造函数和展开操作符
var numbers = [1, 2, 3, 4, 5];

var copy = new Array(...numbers);
copy.push(6); // 添加新项以证明不会修改原始数组

console.log(copy);
console.log(numbers);

// 输出
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5]

// 技巧 7 - 使用解构
const numbers = [1, 2, 3, 4, 5];

const [...copy] = numbers;
copy.push(6); // 添加新项以证明不会修改原始数组

console.log(copy);
console.log(numbers);

// 输出
// [1, 2, 3, 4, 5, 6]
// [1, 2, 3, 4, 5]

// 技巧 8 - 使用Array.concat方法
// 技巧 9 - 使用 Array.push 方法和展开操作符
// 技巧 10 - 使用 Array.unshift 方法和展开操作符
// 技巧 11 - 使用 Array.forEach 方法和展开操作符
// 技巧 12 - 使用 for 循环
// 技巧 13 - 使用 Array.reduce 方法
// 技巧 14 - 使用古老的 apply 方法
