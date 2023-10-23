type sum1 = (a: number, b: number) => number;
type sumResult = ReturnType<sum1>;

type ReturnType2<T> = T extends (...args: any[]) => infer R ? R : never;
type subResult2 = ReturnType2<sum1>;

type FirstType2<T> = T extends (a: infer P, ...args: any[]) => any ? P : never;
type sum2 = (a: string, b: number) => string;
type firstType2 = FirstType2<sum2>;

type PromiseType2<T> = T extends Promise<infer P> ? P : never;
type promise2 = PromiseType2<Promise<string>>;
type promise3 = PromiseType2<Promise<number>>;

