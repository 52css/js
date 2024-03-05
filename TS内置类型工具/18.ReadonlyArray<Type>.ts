function foo(arr: ReadonlyArray<string>) {
  arr.slice(); // okay
  arr.push("hello!"); //  Type error
  arr.pop(); // Type error
  arr.splice(1, 1); // Type error
  arr[0] = "aa"; // Type error
}
foo(["a", "b", "c"]);

interface MyReadonlyArray<T> {
  readonly length: number;
  toString(): string;
  toLocaleString(): string;
  concat(...items: ConcatArray<T>[]): T[];
  concat(...items: (T | ConcatArray<T>)[]): T[];
  join(separator?: string): string;
  slice(start?: number, end?: number): T[];
  indexOf(searchElement: T, fromIndex?: number): number;
  lastIndexOf(searchElement: T, fromIndex?: number): number;
  every<S extends T>(
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any
  ): this is readonly S[];
  every(
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): boolean;
  some(
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): boolean;
  forEach(
    callbackfn: (value: T, index: number, array: readonly T[]) => void,
    thisArg?: any
  ): void;
  map<U>(
    callbackfn: (value: T, index: number, array: readonly T[]) => U,
    thisArg?: any
  ): U[];
  filter<S extends T>(
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
    thisArg?: any
  ): S[];
  filter(
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
    thisArg?: any
  ): T[];
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T
  ): T;
  reduce(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T,
    initialValue: T
  ): T;
  reduce<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => U,
    initialValue: U
  ): U;
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T
  ): T;
  reduceRight(
    callbackfn: (
      previousValue: T,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => T,
    initialValue: T
  ): T;
  reduceRight<U>(
    callbackfn: (
      previousValue: U,
      currentValue: T,
      currentIndex: number,
      array: readonly T[]
    ) => U,
    initialValue: U
  ): U;
  readonly [n: number]: T;
}
