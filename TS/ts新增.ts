// any
let a: any = 1;
a = "1";

// void
function test(a, b): void {
  console.log(a, b);
}

// 可选属性
interface Person {
  name: string;
  age?: number;
}

// 联合类型
let b: string | number = '1';

// 交叉类型
interface A {
  name: string;
}
interface B {
  age: number;
}
let c: A & B = {
  name: '1',
  age: 1
}

// interface
interface User {
  name: string;
  age: number;
}

// type
type User2 = {
  name: string;
  age: number;
}
type User3 = User | User2;
type ButtonType = 'primary' | 'default' | 'danger';

// 泛型
function concat<T>(a: T[], b: T | T[]): T[] {
  return a.concat(b);
}

const arr1 = concat([1, 2], [3, 4]);
const arr2 = concat(['a', 'b'], 'c');
