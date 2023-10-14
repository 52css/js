type PromiseType<T> = T extends Promise<infer K> ? PromiseType<K> : T;

type pt = PromiseType<Promise<string>>; // string
type num = PromiseType<Promise<number>>; // string
type pt1 = PromiseType<Promise<Promise<string>>>; // string