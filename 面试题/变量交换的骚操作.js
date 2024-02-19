let a = 5;
let b = 6;

// 正统
const temp = b;
b = a;
a = temp;
console.log(a, b);

// 解构
[b, a] = [a, b];

// 操作1
a = a + b;
b = a - b;
a = a - b;

a = b + (b = a) - b;

// 操作2
a = a ^ b;
b = a ^ b;
a = a ^ b;