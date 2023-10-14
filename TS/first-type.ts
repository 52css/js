type FirstType<T> = T extends (a: infer A, ...arg: any[]) => any ? A : never;


type str = FirstType<(a: string, b: number) => void> // string
type un = FirstType<() => void> // unknown