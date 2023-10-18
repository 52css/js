// 普通
type A = string[] | string;
type B = string & number;

// 对象联合和交叉？？？
type C = { a: string; b: string };
type D = { a: number; c: number };

type E = C | D;
const e: E = {
  a: 'aaa',
  b: 'bbb',
  c: 123,
};
type F = C & D;
const f: F = {
  a: 'aaa',
  b: 'bbb',
  c: 123,
}

// extend

function extend<A extends object, B extends object>(a: A, b: B): A & B {
  const result = <A & B>{}

  for (let key in a) {
    (result as A)[key] = a[key]
  }

  for (let key in b) {
    if (!result.hasOwnProperty(key)) {
      (result as B)[key] = b[key]
    }
  }

  return result;
}
