// 定义，原始类型\any

// let num1: number = 123;
// let str1: string = "abc";
// let bool1: boolean = true;
// let null1: null = null;
// let undefined1: undefined = undefined;
// let any1: any = 123; // 任意类型，不建议使用

// let num2 = 123;
// let str2 = "abc";
// let bool2 = true;
// let null2 = null;
// let undefined2 = undefined;
// let any2 = 123;

// 定义对象
interface User {
  name: string;
  age: number;
}
let user1: User = {
  name: "张三",
  age: 18,
};
let user2 = {
  name: "李四",
  age: 24,
};

user1.aa = '123' // error
user2.aa = '123' // error

// 定义数组(原始)
let arr1: number[] = [1, 2, 3];
let arr2: string[] = ["a", "b", "c"];
let arr3: boolean[] = [true, false];

let arr4 = [1, 2, 3];
let arr5 = ["a", "b", "c"];
let arr6 = [true, false];

// 定义数组（对象）
let userList1: User[] = [
  {
    name: "张三",
    age: 18,
  },
  {
    name: "李四",
    age: 24,
  },
];

userList1.push({
  name: "王五",
  age: 30,
  abc: '123' // error
})

let userList2 = [
  {
    name: "张三",
    age: 18,
  },
  {
    name: "李四",
    age: 24,
  },
];

userList2.push({
  name: "王五",
  age: 30,
  abc: '123' // error
})

// 定义函数
function add1(x: number, y: number): number {
  return x + y;
};
const add2 = (x: number, y: number): number => {
  return x + y;
}
interface Add3 {
  (x: number, y: number): number;
}
const add3: Add3 = (x, y) => x + y;

function add4(x: number, y?: number = 1): number {
  return x + y;
};
const add5 = (x: number, y?: number = 1): number => {
  return x + y;
}
interface Add6 {
  (x: number, y?: number): number;
}
const add6: Add6 = (x, y = 1) => x + y;
