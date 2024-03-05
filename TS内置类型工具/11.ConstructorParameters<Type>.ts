class Test {
  constructor(a: number, b: string) {}
}
type T1 = ConstructorParameters<typeof Test>; //  [a: number, b: string]

type T2 = ConstructorParameters<new (x: string, y: number) => any>; // [x: string, y: number]

type MyConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer P) => any ? P : never;
