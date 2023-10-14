type ArrayType<T> = T extends (infer K)[] ? K : T;

type ItemType1 = ArrayType<[string, number]>; // string | number
type ItemType2 = ArrayType<[string, string]>; // string