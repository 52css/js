type Return<T> = T extends (...args: any[]) => infer R // 判断是否是一个函数，并且获取返回值类型, 普通判断是 T extends Function 判断
  ? R // 返回返回类型
  : never; // 不是函数返回never;

type sum = (a: number, b: number) => number;
type concat = (a: any[], b: any[]) => any[];

let sumResult: Return<sum>; // number
let concatResult: Return<concat>; // any[]
