// 原始类型
let str = 'str';
let num = 1;
let bool = true;
let null1 = null;
let undefined1 = undefined;

str = 'string';

// 交叉类型(允许多个类型同时存在)
let a: number | string = 1;

a = 'string';
a = true;

// 数组

let arr1: string[] = ['1', '2', '3'];

arr1.push('4');
arr1.push(5);

let arr2 = [1, 2, 3];
arr2.push(4);
arr2.push('5');

// 元组
let tuple: [string, number] = ['1', 2];

// 对象
interface Obj {
  a: number,
  b: string
}
let obj: Obj = {
  a: 1,
  b: '2'
}
obj.a = 2;
obj.a = true;
obj.c = '12341'

let arr3: Obj[] = [];

arr3.push({
  a: 1,
  b: '2'
})

arr3.push({
  a: 11,
  b: '21'
})

// 函数
function sum(a: number, b?: number) {
  return a + b;
}
const sum1 = (a: number, b?: number) => a + b;
interface Sum2 {
  (a: number, b?: number): number
}
const sum2: Sum2 = (a, b = 1) => a + b;