/**
 * 1. () => R
 * 2. (x) => R
 * 3. (x, y) => Function
 */
type Curried<A, R> = A extends []
  ? () => R
  : A extends [infer P]
  ? (param: P) => R
  : A extends [infer P, ...infer A]
  ? (param: P) => Curried<A, R>
  : never;

declare function curry<A extends any[], R>(
  fn: (...args: A) => R
): Curried<A, R>;

function sum(a: number, b: number, c: number) {
  return a + b + c;
}

function sum1() {
  return "312341234";
}

function sum2() {
  return 124312;
}

function sum3(a: number) {
  return a;
}

const currySum = curry(sum);

currySum(1)(2)(3); // 6

// currySum(1)(2)(3); // 6
